import React, { Component } from 'react';

class SizeSetting extends Component {
    onChangeSize(value){
        this.props.changeSize(value);
    }
  render() {
		return (
			<div className="panel panel-warning">
                <div className="panel-heading">
                    Size - {this.props.fontSize}
                </div>
                <div className="panel-body">
                    
                    <button type="button" className="btn btn-success" onClick={()=>this.onChangeSize(-2)}>Down</button>&nbsp;
                    <button type="button" className="btn btn-success" onClick={()=>this.onChangeSize(2)}>Up</button>
                    
                </div>
            </div>			
		);
  	}
}

export default SizeSetting;
