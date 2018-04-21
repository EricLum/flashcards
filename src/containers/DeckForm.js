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
    console.log('submit')
    // run backend adapter
    DeckAdapter.post(this.state)
  }

  handleInput(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onSubmit(e){}

  render(){
    return(
      <form onSubmit={this.handleSubmit} onChange={this.handleInput}>
        {/* <label>Question: </label> */}
        <label>Title: </label>
        <input type='text' name='title'/>
        {/* <input type='text' name='question'/>
        <label>Answer: </label>
        <input type='text' name='answer' />
        <input type='submit' /> */}
      </form>
    )
  }
}

export default DeckForm
