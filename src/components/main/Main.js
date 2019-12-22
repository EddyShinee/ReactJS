import React, {Component} from "react";
import Header from "../layouts/header/Header";
import Content from "../layouts/content/Content";
import index from "styled-components/dist/styled-components-macro.esm";

class Main extends Component{
    constructor(props) {
        super(props);
        console.log(props);
        this.onAddToCart = this.onAddToCart.bind(this);
    }
    showProduction(product) {
        if (product.status){
            return (
                <div>ID : {product.id}</div>,
                <div>Name : {product.name}</div>
        );
        }
    }

    onClick() {
        console.log(1111);
    }

    onAddToCart() {
        alert("adawd");
    }

    render() {
    var a = 7 + 33;
    var produc = {
        "id" : 1,
        "name" : "Iphone 8",
        "status": true,
    }

    var users = [
        {
            id: 1,
            name: "Day la so 1",
            age: 10
        },
        {
            id: 2,
            name: "Day la so 2",
            age: 10
        },
        {
            id: 3,
            name: "Day la so 3",
            age: 10
        }
    ];

    var element = users.map((user, index) => {
        return <div key = {user.id}>
                <h2>{user.name}</h2>
                <h2>{user.age}</h2>
                <button onClick={ this.onClick}> Click me</button>
                <button onClick={ this.onAddToCart}>Add cart</button>
               </div>
    });

      return( <div>
              {this.showProduction(produc)}
              {element}
      </div>
      );
    }
}
export default Main;