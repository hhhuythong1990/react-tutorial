import React, { Component } from 'react';
import './App.css';
import Product from './component/Product';

class App extends Component {
  render() {
	var Products = [
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
	];

	var elem = Products.map((product, index)=>{
		let result = "";
		if(product.status){
			result = <Product key={ index } price={ process.price } image={ product.image }>{ product.name }</Product>
		}
		return result;
	})
    return (
		<div>
			<nav className="navbar navbar-inverse">
				<a className="navbar-brand">Props</a>
			</nav>			
			<div className="container">				
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						{ elem }
					</div>
				</div>
				
			</div>
			
		</div>
		
		
    );
  }
}

export default App;
