import React, { Component } from 'react';
import './App.css';
import TaskForm from './component/TaskForm';
import Control from './component/Control';
import TaskList from './component/TaskList';
// import _ from 'lodash';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            tasks: [],
            isDisplayForm: false,
            taskEditing: null,
            filter:{
                name: '',
                status: -1
            },
            keyword: '',
            sortBy: 'name',
            sortValue: 1
            
        }
    }

    componentWillMount(){
        if(localStorage && localStorage.getItem('tasks')){
            this.setState({
                tasks: JSON.parse(localStorage.getItem('tasks'))
            });
        }
    }

    generateData = () =>{
        let tasks = [
            {
                id: this.generateId()   ,
                name: "Học lập trình",
                status: true
            },
            {
                id: this.generateId(),
                name: "Đi bơi",
                status: true
            },
            {
                id: this.generateId(),
                name: "Ngủ",
                status: true
            }
        ]
        this.setState({
            tasks: tasks
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    s4(){
        return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
    }

    generateId(){
        return this.s4() + "-" + this.s4() + this.s4();
    }

    onToggleForm = () =>{
        if(this.state.isDisplayForm && this.state.taskEditing !== null){
            this.setState({
                isDisplayForm: true,
                taskEditing: null    
            });
        }else{
            this.setState({
                isDisplayForm: !this.state.isDisplayForm,
                taskEditing: null    
            });
        }
        
    }

    closeForm = () =>{
        this.setState({
            isDisplayForm: false
        });
    }

    showForm = () =>{
        this.setState({
            isDisplayForm: true
        });
    }

    onSubmit = (data) =>{
        var { tasks } = this.state;
        if(tasks.id !== ''){
            data.id = this.generateId();
            tasks.push(data);            
        }else{
            let index = this.findIndex(data.id);
            tasks[index] = data;

        }
        this.setState({
            tasks: tasks,
            taskEditing: null
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        
    }

    updateStatusFn = (id)=>{
        let { tasks } = this.state;
        let index = this.findIndex(id);
        if(index !== -1){
            tasks[index].status = !tasks[index].status;
            this.setState({
                tasks: tasks
            });
            localStorage.setItem("tasks", JSON.stringify(tasks));

        }
    }

    removeFn = (id) =>{
        let { tasks } = this.state;
        let index = this.findIndex(id);
        if(index !== -1){
            tasks.splice(index, 1);
            this.setState({
                tasks: tasks
            });
            localStorage.setItem("tasks", JSON.stringify(tasks));
            this.closeForm();
        }
    }

    onUpdate = (id) =>{
        let { tasks } = this.state;
        let index = this.findIndex(id);
        let editing = tasks[index];
               
        this.setState({
            taskEditing: editing
        });

        this.showForm();
        
    }

    findIndex = (id) =>{
        let { tasks } = this.state;
        let result = -1;
        tasks.forEach((task, index)=>{
            if(task.id === id ){
                 result = index; 
            }
        });
        return result;
    }

    filterFn = (filterName, filterStatus) => {
        let status = parseInt(filterStatus);
        this.setState({
            filter:{
                name: filterName.toLowerCase(),
                status: status
            }
        })
    }

    searchFn = (keyword) =>{
        this.setState({
            keyword: keyword
        })
    }

    sortFn = (sortBy, sortValue) => {
        this.setState({
            sortBy: sortBy,
            sortValue: sortValue
        });
        
    }
  render() {
    let { tasks, isDisplayForm, taskEditing, filter, keyword, sortBy, sortValue } = this.state; //let tasks = this.state.task
    if(filter){
        if(filter.name){
            tasks = tasks.filter((task)=>{
                return task.name.toLowerCase().indexOf(filter.name) !== -1;
            })
        }
        tasks = tasks.filter((task)=>{
            if(filter.status === -1){
                return task;
            }else{
                return task.status === (filter.status === 1 ?true : false);
            }
        })
    }

    if(keyword){
        tasks = tasks.filter(task =>{
            return task.name.toLowerCase().indexOf(keyword) !== -1;
        })
    }
    
    if(sortBy === 'name'){
        console.log(sortBy, sortValue)
        tasks.sort((a,b) =>{
            if(a.name > b.name){
                return sortValue;
            }else if(a.name < a.name){
                return sortValue;
            }else{
                return 0;
            }
        });
    }else{
        tasks.sort((a,b) =>{
            if(a.status === b.status){
                return 0
            }else if(a.status){
                return -sortValue;
            }else{
                return sortValue;
            }
            
        });
        
    }

    let elemTaskForm = isDisplayForm ? 
            <TaskForm onCloseForm={ this.closeForm } onSubmit={ this.onSubmit }  task={ taskEditing }/>:"";
    return (
        
        <div className="container">
            <div className="text-center">
                <h1>Quản lý công việc</h1>
            </div>
            <hr />
            <div className="row">                
                <div className={isDisplayForm?'col-xs-4 col-sm-4 col-md-4 col-lg-4':''}>                    
                    { elemTaskForm }                      
                </div>
                
                <div className={isDisplayForm?'col-xs-8 col-sm-8 col-md-8 col-lg-8':'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>                    
                    <button type="button" className="btn btn-primary" onClick={ this.onToggleForm }><span className="fa fa-plus mr-5"></span>Thêm công việc</button>                                        
                    {/* <button type="button" className="btn btn-danger" onClick={this.generateData}><span className="fa fa-plus mr-5"></span>Create data</button>     */}
                    <Control  onSearch={ this.searchFn } onSort={ this.sortFn } sortBy= { sortBy } sortValue={ sortValue }/>

                    <div className="row mt-15">
                        <TaskList task={tasks} onUpdate={this.onUpdate} onUpdateStatus={ this.updateStatusFn } onRemove={this.removeFn} onFilter={this.filterFn}/>                        
                    </div>
                </div>                
            </div>
            
        </div>
        
    );
  }
}

export default App;
