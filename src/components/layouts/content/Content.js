import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './Product';
import Button from '@material-ui/core/Button';

class Content extends Component {

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
                    <Product key={index} name={product.name} price={product.price} image={product.image}/>
                </div>
            )});
        return (
            <div className='row'>
                { elements }
            </div>

        );
    }
}

export default Content;
