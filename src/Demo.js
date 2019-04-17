import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const eml = "Hello world";

function merge_name(user){
    return user.firstname + ' ' +user.lastname;
}

const user = {
    firstname : "Thuận",
    lastname : "Vũ"
}

function timedate() {
    return new Date().toLocaleTimeString();
}

function Welcome(name) {
    return <h1>Hello, {name.lastname}</h1>
}

setInterval(timedate, 1000);
class Demo extends Component {
  render() {
    return (
     <div>
         <nav className="navbar navbar-expand-lg navbar-light bg-success">
             <a className="navbar-brand" href="#">Logo</a>
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
             </button>
             <div className="collapse navbar-collapse" id="navbarNavDropdown">
                 <ul className="navbar-nav">
                     <li className="nav-item active">
                         <a className="nav-link" href="#">Trang chủ <span className="sr-only">(current)</span></a>
                     </li>
                     <li className="nav-item">
                         <a className="nav-link" href="#">Chức năng</a>
                     </li>
                     <li className="nav-item">
                         <a className="nav-link" href="#">Liên hệ</a>
                     </li>
                     <li className="nav-item dropdown">
                         <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                             Tài khoản
                         </a>
                         <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                             <a className="dropdown-item" href="#">Action</a>
                             <a className="dropdown-item" href="#">Another action</a>
                             <a className="dropdown-item" href="#">Something else here</a>
                         </div>
                     </li>
                 </ul>
             </div>
         </nav>
     </div>
    );
  }
}
export default Demo;
