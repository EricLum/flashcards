import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default class Deck extends Component {

  state = {
    clicked: false,
    showDescription: false
  }

  handleMouseEnter = (e) => {
    this.setState({
      showDescription: true
    })
  }

  handleMouseLeave = (e) => {
    this.setState({
      showDescription: false
    })
  }

  handleClick = (e) => {
    this.setState(prevState => {
      return {
        clicked: !prevState.clicked
      }
    })
  }

  render(){
    return(
        <div onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} onClick={this.handleClick} className='card'>
          {this.props.title}
          {this.state.showDescription &&
            <div>
              {this.props.description}
              <Link to={`${this.props.match.url}/${this.props.id}`}> View Deck </Link>
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
