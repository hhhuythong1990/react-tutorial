import React, { Component } from 'react';
import './App.css';
import TaskForm from './component/TaskForm';
import Control from './component/Control';
import TaskList from './component/TaskList';
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            tasks: [],
            isDisplayForm: false
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
        this.setState({
            isDisplayForm: !this.state.isDisplayForm
        });
    }

    closeForm = () =>{
        this.setState({
            isDisplayForm: false
        })
    }

    onSubmit = (data) =>{
        var { tasks } = this.state;
        data.id = this.generateId();
        tasks.push(data);
        this.setState({
            tasks: tasks
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
  render() {
    let { tasks, isDisplayForm } = this.state; //let tasks = this.state.task
    let elemTaskForm = isDisplayForm ? 
            <TaskForm onCloseForm={ this.closeForm } onSubmit={this.onSubmit}/>:"";
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
                    <Control />

                    <div className="row mt-15">
                        <TaskList task={tasks} onUpdateStatus={ this.updateStatusFn } onRemove={this.removeFn}/>                        
                    </div>
                </div>                
            </div>
            
        </div>
        
    );
  }
}

export default App;
