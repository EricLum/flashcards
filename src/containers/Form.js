import React, {Component} from 'react'

class Form extends Component {
  constructor(props){
    super(props)
    this.handleInput = handleInput.bind(this)
  }

  state = {
    question: ''
    answer: ''
    deckId: 0
  }

  handleInput(e){
    this.setState({
      question: e.target.value
    })

  render(){
    return(
      <form></form>
    )
  }
  }


}

export default Form
