import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
    }
  }

  render() {
    return (
      <div>
        <h1>Hello World!!!</h1>
        <p>
          The clock is {this.state.date.toLocaleTimeString()}
        </p>
      </div>
    );
  }
}