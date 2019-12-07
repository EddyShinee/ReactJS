import React, { Component } from 'react';

class Product extends Component{
    constructor(props) {
        super(props);
        this.addToCard = this.addToCard.bind(this);
    }
    addToCard() {
        alert("Mua thành công sản phẩm: " + this.props.name);
        console.log(1);
        this.test('abc', this.addToFavo);
    }
        addToFavo = () => {
            alert("Mua thành công sản phẩm: " + this.props.name);
        }

        test(a,b){
            console.log('test');
        }

    render()
    {
        return(
            <div className="border">
                <div>
                    <img src={this.props.image} alt={this.props.name} />
                </div>
                <div>
                    <h4>
                        {this.props.name}
                    </h4>
                </div>
                <div>
                    <b>
                        {this.props.price}đ
                    </b>
                </div>
                <div>
                    <button type="button" className="btn btn-primary" onClick={this.addToCard}>Mua ngay</button>
                    <button type="button" className="btn btn-info" onClick={this.addToFavo}>Giỏ hàng</button>
                </div>
            </div>
        );
    }
}
export default Product;