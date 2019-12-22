import React, {Component} from "react";
import Header from "../layouts/header/Header";
import Content from "../layouts/content/Content";
import index from "styled-components/dist/styled-components-macro.esm";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'ss',
            thuan: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({value: event.target.value, thuan: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value + this.state.thuan);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>{this.state.thuan}</div>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default Main;