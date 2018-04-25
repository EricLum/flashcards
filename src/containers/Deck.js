import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Route, Redirect} from 'react-router'

class Deck extends Component {
  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }
  state = {
    cardstack: [],
    deckId: 0,
    clicked: false
  }

  handleClick(e){
    // show the cards in the deck
    // how to route.
    this.setState(prevState => {
      return {
        clicked: !prevState.clicked
      }
    }, console.log(this.state.clicked))
  }

  render(){
    return(
      <div>
        {/* <div>
          {this.state.clicked &&
            <Redirect to='/cards'>hey man</Redirect>
          }
        </div> */}
        <div onClick={this.handleClick} className='card'>
          {this.props.title}
        </div>
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
