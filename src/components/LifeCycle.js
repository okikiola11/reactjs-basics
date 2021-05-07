import React from 'react';

// React lifecycle methods
export default class CounterMethods extends React.Component {
  constructor(props) {
    console.log('---- Constructor here ----')
    super(props);

    this.state = {
      counter: 0,
      seed: 0
    }

    this.increment = () => {
      this.setState({counter: this.state.counter + 1})
    }
    this.decrement = () => {
      this.setState({counter: this.state.counter - 1})
    }
  }

  // Copy any values from props you might want to 
  // transfer to state
  static getDerivedStateFromProps(props, state) {
    if(props.seed && state.seed !== props.seed) {
      return {
        seed: props.seed,
        counter: props.seed
      }
    }
    return null
  }

  // introducing LifeCycle Methods
  componentDidMount() {
    console.log('-- Component mount --')
  }

  // Used to let React know if Render shd be triggered/not
  shouldComponentUpdate(nextProps, nextState) {
    // tell React when appropriate to call Render
    if (nextProps.ignoreProp && 
      this.props.ignoreProp !== nextProps.ignoreProp) {
      console.log('Should component update --- DO NOT RENDER')
        return false;
    }
    console.log('Should component update --- RENDER')
    return true;
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