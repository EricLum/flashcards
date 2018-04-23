import React, {Component} from 'react'
import DeckAdapter from '../adapters/DeckAdapter'

class DeckForm extends Component {
  constructor(props){
    super(props)
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // state = {
  //   question: '',
  //   answer: '',
  //   deckId: 0
  // }


  state =  {
    title: ''
  }

  handleSubmit(e){
    e.preventDefault()
    DeckAdapter.post(this.state)
  }

  handleInput(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    return(
      <div> Create a Deck
        <form onSubmit={this.handleSubmit} onChange={this.handleInput}>
          {/* <label>Question: </label> */}
          <label>Title: </label>
          <input type='text' name='title'/>
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default DeckForm
