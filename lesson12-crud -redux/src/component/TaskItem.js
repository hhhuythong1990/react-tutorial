import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';
class TaskItem extends Component {

    onUpdateStatus = ()=>{
        this.props.onUpdateStatus(this.props.task.id);
    }

    onRemoveItem = () =>{
        this.props.onDeleteTask(this.props.task.id);
        this.props.onCloseForm();
    }

    onUpdateItem = () =>{
        this.props.onOpenForm(this.props.task.id);
    }
  render() {
    var {task, index}= this.props; 
    return (            
        <tr>
            <td>{ index + 1 }</td>
            <td>{ task.name }</td>
            <td className="text-center">
                <span className={(task.status === true) ? 'label label-success':'label label-danger'}
                    onClick={this.onUpdateStatus}>
                {(task.status === true) ? "Kích hoạt" : "Ẩn"}
                </span>       
            </td>
            <td className="text-center">
                <button 
                    type="button" className="btn btn-warning"
                    onClick={ this.onUpdateItem }>
                    <span className="fa fa-pencil mr-5"></span>Sửa
                </button>
                &nbsp;
                <button type="button" className="btn btn-danger" onClick={this.onRemoveItem}>
                <span className="fa fa-trash mr-5"></span>Xóa
            </button>
            </td>
        </tr>
        
    );
  }
}

const mapStateToProps = state => {
    return {
        
    };
}

const mapDispatchToProps = (dispatchEvent, props) => {
    return {
        onUpdateStatus: (id) => {
            dispatchEvent(actions.updateStatus(id));
        },
        onDeleteTask: (id) => {
            dispatchEvent(actions.deleteTask(id));
        },
        onCloseForm: () => {
            dispatchEvent(actions.closeForm())
        },
        onOpenForm: () => {
            dispatchEvent(actions.openForm())
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);