import React, {Component} from 'react'
import DeckAdapter from '../adapters/DeckAdapter'
import Deck from '../containers/Deck'
import DeckForm from '../containers/DeckForm'
class DecksContainer extends Component {

  state = {
    decks: []
  }

  componentDidMount(){
    DeckAdapter.index().then(res => res.json())
    .then( json => {
      let data = json.map(deck => <Deck key={deck.id} id={deck.id} match={this.props.match} title={deck.title} description={deck.description} />)
      this.setState({
        decks: data
      })}
    )
  }

  render(){
    return(
      <div>
        <div>
          <DeckForm />
        </div>
        {this.state.decks}
      </div>

    )
  }
}

export default DecksContainer
