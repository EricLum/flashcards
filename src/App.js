import React, { Component } from 'react';
import './App.css';
import CardsPageContainer from './containers/CardsPageContainer'
import DecksContainer from './containers/DecksContainer'
import Landing from './components/Landing'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

const DeckManager = ({match}) => (
  <div>
    <DecksContainer match={match}/>
  </div>
)

const Home = () => (
  <div>
    <Landing />
  </div>
)

const Navigation = () => (
  <div>
    <div className='landingLinks'>
      <Link to='/'>Home</Link>
      <Link to='/decks'>Decks</Link>
    </div>
  </div>
)

class App extends Component {
  render() {
    return (<div>
        <Router>
          <div className='App'>
            <Navigation />
            <div className='mainBody'>
              <Route exact path ='/' component={Home} />
              <Route exact path='/decks' component={DeckManager} />
              <Route exact path='/decks/:deckId' component={CardsPageContainer} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
