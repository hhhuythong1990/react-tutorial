import React, { Component } from 'react';

class ColorPicker extends Component {
    constructor(props){
        super(props);
        this.state = {
            color: ['red', 'green', 'blue', '#ccc']
        }
    }

    showColor (color) {
        return {            
            backgroundColor: color
        }
    }

    setActiveColor(color){
        this.props.onReceiveColor(color);
    }
  render() {
        let elemColor = this.state.color.map((color, index)=>{
            return <span 
                    key={index} 
                    style={this.showColor(color)} 
                    className={(this.props.color === color)?'actived':''}
                    onClick={ ()=>this.setActiveColor(color) }></span>;
        });
		return (
			<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">						
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        Color Picker
                    </div>
                    <div className="panel-body">
                        {elemColor}
                        <hr />
                    </div>
                </div>                
            </div>			
		);
  	}
}

export default ColorPicker;
