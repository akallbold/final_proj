import React, { Component } from 'react';
import './App.css';
import Login from "./Login"
import MainContainer from "./MainContainer"

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainContainer/>
      </div>
    );
  }
}

export default App;
