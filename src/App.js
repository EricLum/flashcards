import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card2 from './containers/Card2'
import Deck from './containers/Deck'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Card2></Card2>
        <Deck title='hey man'></Deck>
      </div>
    );
  }
}

export default App;
