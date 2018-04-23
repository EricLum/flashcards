import React, {Component} from 'react'


class Form extends Component {

  handleSubmit(e){
    e.preventDefault()

  }

  handleInput(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }


export default Form
