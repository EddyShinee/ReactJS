import React, { Component } from 'react';

class Product extends Component{
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
                        {this.props.price}
                    </b>
                </div>
                <div>
                    <button type="button" className="btn btn-primary">Mua ngay</button>

                    <button type="button" className="btn btn-info">Giỏ hàng</button>

                </div>
            </div>
        );
    }
}
export default Product;