import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import DeckForm from './containers/DeckForm'
import CardForm from './containers/CardForm'
import CardsContainer from './containers/CardsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CardsContainer />
        <DeckForm></DeckForm>
        <div>this is a separator</div>
        <CardForm></CardForm>
      </div>
    );
  }
}

export default App;
