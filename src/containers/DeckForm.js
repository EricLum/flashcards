import React, {Component} from 'react'
import DeckAdapter from '../adapters/DeckAdapter'

export default class DeckForm extends Component {

  state =  {
    title: '',
    description: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    DeckAdapter.post(this.state)
  }

  handleInput = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    return(
      <div> Create a Deck
        <form onSubmit={this.handleSubmit} onChange={this.handleInput}>
          <label>Title: </label>
          <input type='text' name='title'/>
          <label>Description: </label>
          <input type='text' name='description'/>
          <input type='submit' />
        </form>
      </div>
    )
  }
}
