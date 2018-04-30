import React, {Component} from 'react'
import DeckAdapter from '../adapters/DeckAdapter'

export default class DeckForm extends Component {

  render(){
    return(
      <div className='genericForm'> Create a Deck
        <form onSubmit={this.props.handleSubmit} onChange={this.props.handleInput}>
          <div>
            <label>Title: </label>
            <input type='text' name='title'/>
          </div>
          <div>
            <label>Description: </label>
            <input type='text' name='description'/>
          </div>
          <input type='submit' />
        </form>
      </div>
    )
  }
}
