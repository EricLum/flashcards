import React, {Component} from 'react'
import CardAdapter from '../adapters/CardAdapter'

class CardForm extends Component {

  render(){
    return(<form onSubmit={this.props.submitFunction} onChange={this.props.handleChange}>

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

        <input type='submit' />
    </form>)
  }
}

export default CardForm
