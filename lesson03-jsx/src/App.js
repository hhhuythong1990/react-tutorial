import React, { Component } from 'react';
import './App.css';

class App extends Component {
    showInfoProduct(product){
        if(product.status){
            return <h3>
                Id : { product.id } <br />
                Name : { product.name } <br />
                Price : { product.price } VNĐ <br />
                Status : { product.status ? 'Active' : 'Pending'}
            </h3>
        }
    }
  render() {
		// return React.createElement('span', { 'className': 'label label-danger' }, "Hello World");
			var a = 5;
			var b = 4;
			var name = 'thong';
			var product = {
				id : 1,
				name: "iphone 6",
                price: 15000000,
                status: true

            };

            var users = [
                {
                    id: 1,
                    name: "Nguyen Van A",
                    age: 18
                },
                {
                    id: 2,
                    name: "Nguyen Van B",
                    age: 19
                },
                {
                    id: 3,
                    name: "Nguyen Van C",
                    age: 21
                }
            ];
            var elem = users.map((user, index)=>{
                return  <div key={user.id}>
                            <h2>Tên: {user.name}</h2>
                            <span>Tuổi: {user.age}</span>
                        </div>

            })
			return (
				<div>
					<nav className="navbar navbar-inverse">
						<a className="navbar-brand">Title</a>
						<ul className="nav navbar-nav">
							<li className="active">
								<a>Home</a>
							</li>
							<li>
								<a>Link</a>
							</li>
						</ul>
					</nav>
					<div className="ml-30">
						<h1>
							a : { a } <br />
							b : { b } <br />
							a + b = {a + b}
						</h1>
						<h1>name : { name }</h1>
						
                        { this.showInfoProduct(product) }
                        <br />
                        <hr />
                        { elem }
					</div>
					
				</div>				
				
			);
  }
}

export default App;
