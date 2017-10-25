 import React, { Component } from 'react';
import './App.css';


class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			products: [
				{
					id: 1,
					name: "Apple Iphone 8 X",
					price: 15000000,
					image: "https://cdn.vox-cdn.com/uploads/chorus_asset/file/9239819/Screen_Shot_2017_09_13_at_2.37.00_PM.png",
					status: true
				},
				{
					id: 2,
					name: "Samsung 7 Edge",
					price: 15000000,
					image: "https://cdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s7-edge-2.jpg",
					status: true
				},
				{
					id: 3,
					name: "Sony Xperia XZ",
					price: 12000000,
					image: "https://images.cdn.stuff.tv/sites/stuff.tv/files/brands/Sony/Xperia_XZ_Premium/review/sony_xperia_xz_premium_side_on_adj.png",
					status: true
				}
			],
			isActive: true
		}
	}
	onClick(){
		console.log("this is app component");
	}

	onAddToCart = () => {
		console.log(this.refs.name.value);
	}

	onSetState = () => {
		this.setState({
			isActive: !this.state.isActive
		})
	}
  render() {
	var elem = this.state.products.map((product, index)=>{
		let result = "";
		if(product.status){
			result = <tr key={index}> 
						<td>{index + 1}</td>
						<td>{product.name}</td>
						<td>
							<span className="label label-success">{product.price} VNĐ</span></td>
					</tr>
		}
		return result;
	})
    return (
		<div>
			<nav className="navbar navbar-inverse">
				<a className="navbar-brand">Event - State</a>
			</nav>			
			<div className="container">								
				<div className="row">
					
					<table className="table table-bordered table-hover">
						<thead>
							<tr>
								<th>No.</th>
								<th>Name</th>
								<th>Price</th>
							</tr>
						</thead>
						<tbody>
							{elem}
						</tbody>
					</table>

					
					<button type="button" className="btn btn-warning" onClick={this.onSetState}>Active : { (this.state.isActive)? 'true' : 'false' }</button>
									
					
				</div>
								
			</div>
			
		</div>
		
		
    );
  }
}

export default App;
