import React, { Component } from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';

class TaskList extends Component {
    constructor(props){
        super(props);
        this.state = {
            filterName: '',
            filterStatus: -1
        }
    }

    onChange = (event) =>{
        const target = event.target;
        let name = target.name;
        let value = target.value;
        this.props.onFilter(
            name === 'filterName' ? value : this.state.filterName,
            name === 'filterStatus' ? value : this.state.filterStatus
        )
        this.setState({
            [name]: value
        })
    }
  render() {
    let { tasks } = this.props;
    let { filterName, filterStatus} = this.state;
    let elemTask = tasks.map((task, index)=>{
        return <TaskItem key={task.id} index={index} task={task} />
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
                            name="filterName"
                            value={ filterName }
                            onChange={ this.onChange }/>
                        </td>
                        <td>
                            <select className="form-control"
                                name="filterStatus"
                                value={ filterStatus }
                                onChange={ this.onChange }>
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

const mapStateToProps = (state) => {
    return { 
        tasks: state.tasks
    }
}

export default connect(mapStateToProps, null)(TaskList);
