import React, { Component } from 'react';
import logo from './squirrel-41255_640.png';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      sharedIndex: 17,
      advice: ''
    };

  }

  getAdvice() {
    axios.get('http://api.adviceslip.com/advice').then(respa => {
      let advice = respa.data.slip.advice;
      console.log(advice)
      axios.get('http://libberfy.herokuapp.com/?q=' + advice).then(respb => {
        let madlib = respb.data.madlib;
        console.log(madlib);
      });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Squirrel Advice</h1>
        </header>
        <button onClick={this.getAdvice.bind(this)}>Click here for advice!</button>
        <p>{this.state.advice}</p>
      </div>
    );
  }
}

export default App;
