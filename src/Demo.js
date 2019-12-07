import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Button from '@material-ui/core/Button';

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
    onClick() {
        console.log("Appp ");
    }
    render() {
        var products = [
            {
                id: 1,
                name: 'Iphone 7 Plus 16GB - Màu đen - Màu đỏ',
                price: '15.000.000',
                image: 'https://cdn.tgdd.vn/Products/Images/42/78124/iphone-7-plus-gold-400x460.png'
            },
            {
                id: 2,
                name: 'Samsung Galaxy S8 - 128GB',
                price: '17.000.000',
                image: 'https://cdn.tgdd.vn/Products/Images/42/190321/iphone-xs-max-gray-400x460.png'
            },
            {
                id: 3,
                name: 'Oppo F11S - 64GB',
                price: '12.000.000',
                image: 'https://cdn.tgdd.vn/Products/Images/42/199041/vivo-v15-quanghai-400x460.png'
            }
        ];

        let elements = products.map((product, index) => {
            return(
                <div className='col-4'>
                    <Header key={index} name={product.name} price={product.price} image={product.image}/>
                    <Button variant="contained" color="primary">
                        Click me man
                    </Button>
                </div>
            )});
        return (
            <div className='row'>
                { elements }
                <div>
                    <button type="button" className="btn btn-warning" onClick={this.onClick}>Click Me</button>
                </div>
            </div>

        );
    }
}
export default Demo;
