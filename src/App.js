import React, { Component } from 'react';
import './App.css';
import DeckForm from './containers/DeckForm'
import CardForm from './containers/CardForm'
import CardsContainer from './containers/CardsContainer'
import DecksContainer from './containers/DecksContainer'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

//views

//home

//create a deck

//deck manager
//ability to associate cards to multiple decks

const DeckManager = ({match}) => (
  <div>
    <DecksContainer match={match}/>
  </div>
)

const Home = () => (
  <div>
    'landing page'
  </div>
)

const Navigation = () => (
  <div>
    <div className='landingLinks'>
      <Link to='/'>Home</Link>
      <Link to='/decks'>Decks</Link>
      <Link to='/cards'>Cards</Link>
    </div>
  </div>
)

//view a deck / play with a deck
// add cards

class App extends Component {
  render() {
    return (<div>
        <Router>
          <div className='App'>
            <Navigation />
            <Route exact path ='/' component={Home} />
            <Route exact path='/decks' component={DeckManager} />
            <Route exact path='/decks/:deckId' component={CardsContainer} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
