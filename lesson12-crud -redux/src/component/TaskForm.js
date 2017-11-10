import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';
class TaskForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            id:'',
            name : '',
            status : false
        }
    }

    componentWillMount(){
        if(this.props.task){
            this.setState({
                id: this.props.task.id,
                name: this.props.task.name,
                status: this.props.task.status,
            })
        }
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps);
        if(nextProps && nextProps.task){
            this.setState({
                id: nextProps.task.id,
                name: nextProps.task.name,
                status: nextProps.task.status,
            })
        }else if(!nextProps.task){
            this.setState({
                id:'',
                name : '',
                status : false
            });
        }
    }

    closeForm = () =>{
        this.props.onCloseForm();
    }

    onChange = (event)=>{
        let target = event.target;
        var name = target.name;
        var value = target.value;
        if(name === 'status'){
            value = target.value === 'true' ? true : false;
        }
        this.setState({
            [name]: value
        })
    }

    submitFn = (event) =>{
        event.preventDefault();
        this.props.onAddTask(this.state);
        this.clearFn();
        this.closeForm();
    }

    clearFn = () =>{
        this.setState({
            name: "",
            status: false
        })
    }
  render() {
        var { id } = this.state;
        if(!this.props.isDisplayForm) return '';
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        { id !== '' ? "Cập nhật công việc": "Thêm công việc" }
                        <span className="fa fa-times-circle text-right" onClick={this.closeForm}></span>
                    </h3>
                </div>
                <div className="panel-body">
                    
                    <form onSubmit={this.submitFn}>                                
                        <div className="form-group">
                            <label>Tên : </label>
                            <input type="text" 
                                className="form-control" 
                                name="name"
                                value={this.state.name}
                                onChange={this.onChange} />
                        </div>
                        <label>Trạng thái : </label>                                    
                        <select name="status" className="form-control"
                            value={this.state.status}
                            onChange={this.onChange}>
                            <option value={ true }>Kích hoạt</option>
                            <option value={ false }>Ẩn</option>
                        </select>
                        <br />
                        <div className="text-center">
                            
                            <button type="submit" className="btn btn-warning"><span className="fa fa-plus mr-5"></span>Lưu lại</button>
                            &nbsp;
                            <button type="button" className="btn btn-danger" onClick={this.clearFn}><span className="fa fa-close mr-5"></span>Hủy</button>
                            
                        </div>
                    </form>                                
                </div>
            </div>                
        );
    }
}

const mapStateToProps = state => {
    return {
        isDisplayForm: state.isDisplayForm
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddTask: (task) =>{
            dispatch(actions.addTask(task))
        },
        onCloseForm: () => {
            dispatch(actions.closeForm())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
