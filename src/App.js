import React, { Component } from "react";
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import MyProps from './components/MyProps';
import Comment from './components/ComposeComp/Comment'
import comment from './components/ComposeComp/Db';
import State from './components/State';

import Clock from './components/Clock';
import ToggleState from './components/ToggleState';
import Counter from './components/Counter';

import CounterMethods from './components/LifeCycle';

class App extends Component {
  constructor(props) {
    super(props);

    // Create lifeCycle Methods starts
    this.state = {
      mount: true,
      ignoreProp: 0,
      seed: 40
    }

    this.mountCounter = () => this.setState({mount: true})
    this.unmountCounter = () => this.setState({mount: false})
    
    this.ignoreProp = () => this.setState({ignoreProp: Math.random()})
    this.seedGenerator = () => this.setState({seed: Number.parseInt(Math.random() * 100)})
    // LifeCycle Methods Ends Here

    this.onClickBtn = this.onClickBtn.bind(this);
  }

  onClickBtn() {
    alert('Button has been clicked!')
  }

  render() {
    return (
      <div className='container'>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header/>
          </div>
        </div>
  
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <p> Hello World! </p>
            <Home/>
          </div>
        </div>
  
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <MyProps title="React" onButtonClicked={this.onClickBtn} />
          </div>
        </div>

        {/* Calling Multiple Components */}
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
          <Comment
            date={comment.date}
            text={comment.text}
            author={comment.author}
          />
          </div>
        </div>

        {/* State called in the component */}
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Clock />
          </div>
        </div>

        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <State />
          </div>
        </div>

        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <ToggleState />
          </div>
        </div>

        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Counter />
          </div>
        </div>

        {/* LifeCycle Methods */}
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <button onClick={this.mountCounter}
            >Mount Counter
            </button>
            <button onClick={this.unmountCounter}
            >Unmount Counter
            </button>
            <button onClick={this.ignoreProp}>ignoreProp</button>
            <button onClick={this.seedGenerator}>Generate Seed</button>

            {this.state.mount ? 
              <CounterMethods 
                ignoreProp={this.state.ignoreProp}
                seed={this.state.seed}
              /> : null}
          </div>
        </div>
      </div>

      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default App;
