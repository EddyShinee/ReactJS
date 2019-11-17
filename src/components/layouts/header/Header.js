import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './Logo';

class Header extends Component{
    render()
    {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#"></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Trang chủ <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Liên hệ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Về chúng tôi</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Danh mục sản phẩm
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#">Sản phẩm A</a>
                                <a className="dropdown-item" href="#">Sản phẩm B</a>
                                <a className="dropdown-item" href="#">Sản phẩm C</a>
                            </div>
                        </li>
                        <li>
                            <div className="nav-item">
                                <a className="nav-link" href="#">VŨ ĐỨC THUẬN CHECK</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default Header;