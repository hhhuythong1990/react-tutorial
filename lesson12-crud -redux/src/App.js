import React, { Component } from 'react';
import './App.css';
import TaskForm from './component/TaskForm';
import Control from './component/Control';
import TaskList from './component/TaskList';
import { connect } from 'react-redux';
import * as actions from './actions/index';
// import _ from 'lodash';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
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

    onToggleForm = () =>{
        this.props.onToggleForm();        
    }

    showForm = () =>{
        this.setState({
            isDisplayForm: true
        });
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
    let { taskEditing, filter, keyword, sortBy, sortValue } = this.state; //let tasks = this.state.task
    let { isDisplayForm } = this.props;

    // if(filter){
    //     if(filter.name){
    //         tasks = tasks.filter((task)=>{
    //             return task.name.toLowerCase().indexOf(filter.name) !== -1;
    //         })
    //     }
    //     tasks = tasks.filter((task)=>{
    //         if(filter.status === -1){
    //             return task;
    //         }else{
    //             return task.status === (filter.status === 1 ?true : false);
    //         }
    //     })
    // }

    // if(keyword){
    //     tasks = tasks.filter(task =>{
    //         return task.name.toLowerCase().indexOf(keyword) !== -1;
    //     })
    // }
    
    // if(sortBy === 'name'){
    //     tasks.sort((a,b) =>{
    //         if(a.name > b.name){
    //             return sortValue;
    //         }else if(a.name < a.name){
    //             return sortValue;
    //         }else{
    //             return 0;
    //         }
    //     });
    // }else{
    //     tasks.sort((a,b) =>{
    //         if(a.status === b.status){
    //             return 0
    //         }else if(a.status){
    //             return -sortValue;
    //         }else{
    //             return sortValue;
    //         }
            
    //     });
        
    // }

    return (
        
        <div className="container">
            <div className="text-center">
                <h1>Quản lý công việc</h1>
            </div>
            <hr />
            <div className="row">                
                <div className={isDisplayForm?'col-xs-4 col-sm-4 col-md-4 col-lg-4':''}>                    
                    <TaskForm task={ taskEditing }/>                      
                </div>
                
                <div className={isDisplayForm?'col-xs-8 col-sm-8 col-md-8 col-lg-8':'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>                    
                    <button type="button" className="btn btn-primary" onClick={ this.onToggleForm }><span className="fa fa-plus mr-5"></span>Thêm công việc</button>                                        
                    {/* <button type="button" className="btn btn-danger" onClick={this.generateData}><span className="fa fa-plus mr-5"></span>Create data</button>     */}
                    <Control  onSearch={ this.searchFn } onSort={ this.sortFn } sortBy= { sortBy } sortValue={ sortValue }/>

                    <div className="row mt-15">
                        <TaskList onFilter={this.filterFn}/>                        
                    </div>
                </div>                
            </div>
            
        </div>
        
    );
  }
}

const mapStateToProps = state => {
    return {
        isDisplayForm: state.isDisplayForm
    };
}

const mapDispatchToProps = (dispatchEvent, props) => {
    return {
        onToggleForm: () =>{
            dispatchEvent(actions.toggleForm());
        },
        onCloseForm: () => {
            dispatchEvent(actions.closeForm())
        },
        onOpenForm: () => {
            dispatchEvent(actions.openForm())
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
