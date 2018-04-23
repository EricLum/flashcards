import React, {Component} from 'react'
import CardAdapter from '../adapters/CardAdapter'

class CardForm extends Component {
  constructor(props){
    super(props)

    this.onSubmit =this.onSubmit.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  state = {
    title: '',
    question: '',
    answer: '',
    deckId: 0
  }

  onSubmit(e) {
    e.preventDefault()
    //Add submitting behavior
    CardAdapter.post(this.state)
  }

  handleInput(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    return(<form onSubmit={this.onSubmit} onChange={this.handleInput}>

        <div>
          <label>Title: </label>
          <input type='text' name='title' />
        </div>

        <div>
          <label>Question: </label>
          <input type='text' name='question'/>
        </div>

        <div>
          <label>Answer: </label>
          <input type='text' name='answer' />
        </div>
          <label>DeckId: </label>
          <input type='number' name='deckId' />
        <div>

        </div>
        <input type='submit' />
    </form>)
  }
}

export default CardForm
