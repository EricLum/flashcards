import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './containers/Card'
import Deck from './containers/Deck'
import Form from './containers/Form'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Card></Card>
        <Deck title='hey man'></Deck>
        <Form></Form>
      </div>
    );
  }
}

export default App;
