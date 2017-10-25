import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {
  render() {
    let { task } = this.props;
    let elemTask = task.map((task, index)=>{
        return <TaskItem key={task.id} index={index} task={task} updateStatusItem={this.props.onUpdateStatus} removeItem={this.props.onRemove}/>
    });
    return (            
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Tên</th>
                        <th className="text-center">Trạng thái</th>
                        <th className="text-center">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <input type="text"
                            className="form-control" 
                            name="filterName"/>
                        </td>
                        <td>
                            <select className="form-control"
                                name="filterStatus">
                                <option value={ -1 }>Tất cả</option>
                                <option value={ 0 }>Ẩn</option>
                                <option value={ 1 }>Kích hoạt</option>
                            </select>
                        </td>
                        <td></td>
                    </tr>
                    { elemTask }
                </tbody>
            </table>                
        </div>
        
    );
  }
}

export default TaskList;
