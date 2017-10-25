import React, { Component } from 'react';

class TaskForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            name : '',
            status : false
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
        this.props.onSubmit(this.state);
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
    return (
        <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        Thêm công việc
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

export default TaskForm;
