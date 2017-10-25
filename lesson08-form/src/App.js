import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			txtName: "abc",
			txtPassword: "",
			txtDecs:"abc",
			sltGender: 1,
			rdLang: "vi",
			chkbStatus: false
		}
	}

	onHandleChange = (event) => {
		const target = event.target;
		let name = target.name;
		let value = target.type === 'checkbox' ? target.checked : target.value;

		this.setState({
			[name] : value
		})
	}

	onHandleSubmit = (event) =>{
		event.preventDefault();
		console.log(this.state);

	}
  render() {

    return (
		
		<div className="container mt-30">
			
			<div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
				
				<div className="panel panel-primary">
					  <div className="panel-heading">
							<h3 className="panel-title">Form</h3>
					  </div>
					  <div className="panel-body">							
							<form onSubmit={ this.onHandleSubmit }>							
								<div className="form-group">
									<label>User name</label>
									<input type="text" 
										className="form-control" 
										name="txtName" 
										onChange={ this.onHandleChange }
										value={this.state.txtName}
									/>
								</div>

								<div className="form-group">
									<label>Password</label>
									<input type="text" 
										className="form-control" 
										name="txtPassword" 
										onChange={ this.onHandleChange }
									/>
								</div>

								<div className="form-group">
									<label>Mô tả</label>
									
									<textarea className="form-control" 
										rows="3" 
										name="txtDecs" 
										onChange={ this.onHandleChange }
										value={this.state.txtDecs}>
									</textarea>
									
								</div>	

								
								<label>Label</label>																
								<select name="sltGender" 
									className="form-control" 
									value={ this.state.sltGender }
									onChange={ this.onHandleChange }>
									<option value={0} >Nữ</option>
									<option value={1} >Nam</option>
								</select>

								<label>Ngôn ngữ</label>
								<div className="radio">
									<label>
										<input type="radio" 
										name="rdLang" 
										value="vi"
										onChange={ this.onHandleChange }
										checked={ this.state.rdLang === 'vi'}/>
										Tiếng Việt
									</label>
									<br />
									<label>
										<input type="radio" 
										name="rdLang"
										value="en"
										onChange={ this.onHandleChange }
										checked={ this.state.rdLang === 'en'}/>
										Tiếng Anh
									</label>
								</div>

								
								<div className="checkbox">
									<label>
										<input type="checkbox" 
											value={true}
											name="chkbStatus"
											checked={this.state.chkbStatus=== true}
											onChange={ this.onHandleChange } />
										Trạng thái
									</label>
								</div>
								
								
														
								<br />
								<button type="submit" className="btn btn-primary">Lưu lại</button> &nbsp;
								<button type="reset" className="btn btn-default">Xóa trắng</button>
							</form>
							
					  </div>
				</div>
				
			</div>
			
		</div>
		
    );
  }
}

export default App;
