import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Route, Redirect, Link} from 'react-router-dom'
import CardsContainer from './CardsContainer'

class Deck extends Component {
  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
  }

  state = {
    cardstack: [],
    clicked: false,
    showDescription: false
  }

  componentDidMount(){
  }

  handleMouseEnter(e){
    this.setState({
      showDescription: true
    })
  }

  handleMouseLeave(e){
    this.setState({
      showDescription: false
    })

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
        <div onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} onClick={this.handleClick} className='card'>
          {this.props.title}
          {this.state.showDescription &&
            <div>
              {this.props.description}
              <Link to={`${this.props.match.url}/${this.props.id}`}> this is a link</Link>
              {/* <Route path={`${this.props.match.url}/:deckId`} render={(props) => <CardsContainer {...props} />} /> */}
              />
            </div>
          }
        </div>
    )
  }
}

//Prop Type validation
Deck.defaultProps = {
  title: 'sample deck title',
  description: 'sample description',
  id: 0
}
Deck.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string
}
export default Deck
