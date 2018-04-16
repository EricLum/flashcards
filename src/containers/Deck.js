import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Deck extends Component {

  state = {
    cardstack: [],
    deckId: 0
  }

  render(){
    return(
      <div>
        {this.props.title}
      </div>
    )
  }
}

//Prop Type validation
Deck.defaultProps = {
  title: 'sample deck title'
}
Deck.propTypes = {
  title: PropTypes.string
}
export default Deck
