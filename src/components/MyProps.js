import React, { Component } from "react";

class MyProps extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, onButtonClicked } = this.props;

    return (
      <div>
        <h1>{title}</h1>
        {/* Using props with functions */}
        <button onClick={onButtonClicked}>Click Me!</button>
      </div>
    )
  }
}

export default MyProps;