import React, {Component} from 'react'
import Card from '../containers/Card'
import DeckAdapter from '../adapters/DeckAdapter'
import CardsForm from '../containers/CardForm'
import CardAdapter from '../adapters/CardAdapter'

class CardsContainer extends Component {

  constructor(props){
    super(props)
  }

  // handleSubmit(e){
  //   e.preventDefault()
  //   //Add submitting behavior
  //   CardAdapter.post(this.state).then( (data) => {
  //     console.log(data)
  //     this.setState((prevState) => {
  //       cards: [...prevState.cards, data]
  //     })
  //   })
  // }

  // componentDidMount(){
  //   this.props.cards.map( card => <Card key ={card.id} answer={card.answer} question={card.question} title={card.title}})
  // }
  // componentDidMount(){
  //   DeckAdapter.get(this.props.match.params.deckId).then( res => res.json())
  //   .then( json => {
  //     let data = json.map( card => <Card key={card.id} answer={card.answer} question={card.question} title={card.title} />)
  //     this.setState({
  //       cards: data
  //     })
  //   })
  // }

  render(){
    return(
      <div>
        <div className='cardsGrid'>
        {this.props.cards}
        </div>
      </div>
    )
  }
}

export default CardsContainer
