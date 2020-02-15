import React, { Component } from "react";
import Header from "../layouts/header/Header";
import Content from "../layouts/content/Content";
import index from "styled-components/dist/styled-components-macro.esm";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "ss",
      thuan: "",
      thuan2: "",
      typeTruits: "coconut",
      count: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
      //   thuan: event.target.value.toUpperCase(),
      typeTruits: event.target.value
    });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value + this.state.thuan);
    event.preventDefault();
  }

  countUp(num) {
    this.setState({
      count: num + 1
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.countUp(this.state.count)}>
          Count up!
        </button>
        <form onSubmit={this.handleSubmit}>
          <div>{this.state.thuan}</div>
          <select value={this.state.typeTruits} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option selected value="coconut">
              Coconut
            </option>
            <option value="mango">Mango</option>
          </select>
          <label>
            Name:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <div>{this.state.count}</div>
      </div>
    );
  }
}

export default Main;
