import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ColorPicker from './component/ColorPicker';
import Reset from './component/Reset';
import Result from './component/Result';
import SizeSetting from './component/SizeSetting';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			color : 'red',
			fontSize : 15
		};
		this.onChangeSize = this.onChangeSize.bind(this);
	}

	onSetColor = (color) => {
		this.setState({
			color: color
		})
	}

	onChangeSize(value){
		if(this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36){
			this.setState({
				fontSize : this.state.fontSize + value
			});
		}
	}

	onSettingDefault = (value)=>{
		if(value){
			this.setState({
				color : 'red',
				fontSize : 15
			});
		}
	}
  render() {
		return (
			
			<div className="container mt-50">
				
				<div className="row">
					<ColorPicker color={this.state.color} onReceiveColor={this.onSetColor} />
					
					<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
						
						<SizeSetting fontSize={this.state.fontSize} changeSize={this.onChangeSize}/>

						<Reset settingDefault={this.onSettingDefault}/>
					</div>
					
					<Result color={this.state.color} fontSize={this.state.fontSize}/>					
					
				</div>
				
			</div>
			
		);
  	}
}

export default App;
