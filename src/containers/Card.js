import React, {Component} from 'react'
import PropTypes from 'prop-types'
class Card extends Component {

  render(){
    return(
      <div>
        <div>
          {this.props.title}
        </div>
        <div>
          {this.props.question}
        </div>
        <div>
          {this.props.answer}
        </div>
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
