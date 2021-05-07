import React from 'react';

// React lifecycle methods
export default class CounterMethods extends React.Component {
  constructor(props) {
    console.log('---- Constructor here ----')
    super(props);

    this.state = {
      counter: 0
    }

    this.increment = () => {
      this.setState({counter: this.state.counter + 1})
    }
    this.decrement = () => {
      this.setState({counter: this.state.counter - 1})
    }
  }

  // introducing LifeCycle Methods
  componentDidMount() {
    console.log('-- Component mount --')
  }

  render() {
    console.log('--- Render ---')

    return <div>
      <div className='counter'>
        <h1> LifeCycle Methods</h1>
        <h4>Counter: {this.state.counter}</h4>
      </div>

      <button onClick={this.increment}>Increment</button>
      <button onClick={this.decrement}>Decrement</button>
    </div>
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log('Component did update');
    console.log('----------------');
  }

  componentWillUnmount() {
    console.log('Component Will Unmount');
    console.log('----------------');
  }
}