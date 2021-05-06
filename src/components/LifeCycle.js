import React from 'react';

// React lifecycle methods
export default class CounterMethods extends React.Component {
  constructor(props) {
    console.log('---- Constructor here ----')
    super(props);

    this.state = {
      counter: 0
    }
  }

  render() {
    console.log('--- Render ---')

    return <div>
      <div classNam='counter'>
        Counter: {this.state.counter}
      </div>
    </div>
  }
}