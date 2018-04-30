import React, {Component} from 'react'
import DeckAdapter from '../adapters/DeckAdapter'
import Deck from '../containers/Deck'
import DeckForm from '../containers/DeckForm'

export default class DecksContainer extends Component {

  state = {
    decks: [],
    title: '',
    description: ''
  }

    handleSubmit = (e) => {
      e.preventDefault()
      DeckAdapter.post({title: this.state.title, description: this.state.description})
      .then( res => res.json())
      .then( deck => {

        let newDeck = (<Deck key={deck.id} id={deck.id} match={this.props.match} title={deck.title} description={deck.description} />)

        this.setState(prevState => {
          return {
            decks: [...prevState.decks, newDeck]
          }
        })

      })

      this.setState({
        title: '',
        description: ''
      })
    }

    handleInput = (e) =>{
      this.setState({
        [e.target.name]: e.target.value
      })
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
        <div className='decksForm'>
          <DeckForm handleInput = {this.handleInput} handleSubmit={this.handleSubmit}/>
        </div>
        <div className='cardsGrid'>
          {this.state.decks}
        </div>
      </div>
    )
  }
}
