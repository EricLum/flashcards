import React, {Component} from 'react'
import PropTypes from 'prop-types'

class CardForm extends Component {
  constructor(props){
    super(props)

    this.onSubmit =this.onSubmit.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  state = {
    title: '',
    question: '',
    answer: ''
  }

  onSubmit(e) {
    e.preventDefault()
    
  }

  handleInput(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    return(<form>

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
