import React, {Component} from 'react'
import Card from '../containers/Card'
import DeckAdapter from '../adapters/DeckAdapter'
import CardsForm from '../containers/CardForm'

class CardsContainer extends Component {

  state = {
    cards: []
  }

  componentDidMount(){
    console.dir(this.props)
    DeckAdapter.get(this.props.match.params.deckId).then( res => res.json())
    .then( json => {
      let data = json.map( card => <Card key={card.id} answer={card.answer} question={card.question} title={card.title} />)
      this.setState({
        cards: data
      })
    })
  }

  render(){
    return(
      <div>
        <div>
          <CardsForm deckId={this.props.match.params.deckId}/>
        </div>
        <div className='cardsGrid'>
        {this.state.cards}
        </div>
      </div>
    )
  }
}

export default CardsContainer
