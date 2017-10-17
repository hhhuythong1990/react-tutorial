import React, { Component } from 'react';

class Product extends Component {
  render() {
    return (		
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="thumbnail">
                <img alt="iphone-6" src="http://static1.businessinsider.com/image/59b8459838d20d3c098b509c-2400/gettyimages-846148982.jpg"/>
                <div className="caption">
                    <h3>Iphone 6 plus</h3>
                    <p>
                        16.000.000
                    </p>
                    <p>                       
                        <button type="button" className="btn btn-success">Mua hàng</button>                        
                    </p>
                </div>
            </div>
        </div>        
    );
  }
}

export default Product;
