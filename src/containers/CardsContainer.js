import React, {Component} from 'react'
import Card from '../containers/Card'
import CardAdapter from '../adapters/CardAdapter'
import CardsForm from '../containers/CardForm'
class CardsContainer extends Component {

  state = {
    cards: []
  }

  componentDidMount(){
    CardAdapter.index().then( res => res.json())
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
          <CardsForm />
        </div>
        <div className='cardsGrid'>
        {this.state.cards}
        </div>
      </div>
    )
  }
}

export default CardsContainer