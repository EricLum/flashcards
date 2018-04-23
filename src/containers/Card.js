import React, {Component} from 'react'
class Card extends Component {

  constructor(props) {
    super(props);
    this.toggleShowAnswer = this.toggleShowAnswer.bind(this)
  }

  state = {
    showAnswer: false
  }

  toggleShowAnswer(){
    this.setState(prevState => ({
      showAnswer: !prevState.showAnswer
    }))
  }

  render(){

    return(
      <div className='card'>
        <div>
          {this.props.title}
        </div>
        <div>
          {this.props.question}
        </div>
        <button onClick={this.toggleShowAnswer}>click me</button>
        {this.state.showAnswer &&
          <div>
            {this.props.answer}
          </div>
        }
      </div>
    )
  }
}

Card.defaultProps = {
  title: 'Javascript Question 1',
  question: 'Explain the concept of scope',
  answer: 'Scope is the realm in which a variable lives'
}

export default Card
