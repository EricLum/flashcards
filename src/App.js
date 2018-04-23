import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Card from './containers/Card'
import Deck from './containers/Deck'
import DeckForm from './containers/DeckForm'
import CardForm from './containers/CardForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card></Card>
        <Deck title='hey man'></Deck>
        <DeckForm></DeckForm>
        <div>this is a separator</div>
        <CardForm></CardForm>
      </div>
    );
  }
}

export default App;
