import React, { Component } from 'react';
import './App.css';
import Posts from './components/Posts'
import Postform from './components/Postform'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Postform/>
        <hr />
        <Posts />
      </div>
    );
  }
}

export default App;
