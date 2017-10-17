import React, { Component } from 'react';

class Header extends Component {
    render() {
        return(            
            <nav className="navbar navbar-inverse">
                <a className="navbar-brand">Bài 2 - Component</a>
                <ul className="nav navbar-nav">
                    <li>
                        <a>Trang Chủ</a>
                    </li>
                    <li className="active">
                        <a>Danh mục sản phẩm</a>
                    </li>
                </ul>
            </nav>            
        );        
    }
}

// function Header(){
//     return(
//         <div>
//             <h1>Header Component</h1>
//         </div>
//     );
// }

export default Header;