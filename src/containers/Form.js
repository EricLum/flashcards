import React, {Component} from 'react'

class Form extends Component {
  constructor(props){
    super(props)
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  state = {
    question: '',
    answer: '',
    deckId: 0
  }

  handleSubmit(e){
    e.preventDefault()
    console.log('submitted')
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
        <label>Question: </label>
        <input type='text' name='question'/>
        <label>Answer: </label>
        <input type='text' name='answer' />
        <input type='submit' />
      </form>
    )
  }
}

export default Form
