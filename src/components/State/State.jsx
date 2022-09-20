import React, { Component } from "react";

export default class State extends Component {
  state = {
    ism: "Javohir",
    familya: "Javohirov",
    age: 21,
    number: 0,
  };
  onChange = () => {
    this.setState({
      number: this.state.number + 1,
      ism: "Rasul",
      familya: "Jabborov",
      age: 22,
    });
  };
  render() {
    const { ism, familya, age, number } = this.state;

    return (
      <div>
        <h3>ism:{ism}</h3>
        <h3>familya:{familya}</h3>
        <h3>age:{age}</h3>
        <h3>number:{number}</h3>
        <button
          onClick={() => this.onChange()}
          style={{ backgroundColor: "blue" }}
        >
          Change
        </button>
      </div>
    );
  }
}
