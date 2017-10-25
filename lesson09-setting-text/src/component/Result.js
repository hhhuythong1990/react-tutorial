import React, { Component } from 'react';

class Result extends Component {
    setStyle(){
        return{
            color: this.props.color,
            borderColor: this.props.color,
            fontSize: this.props.fontSize
        }
    }
  render() {
		return (
			
			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <p>Color : red - Fontsize : {this.props.fontSize}</p>
                <div id="content" style={this.setStyle()}>
                    Content setting
                </div>  
            </div>
		);
  	}
}

export default Result;
