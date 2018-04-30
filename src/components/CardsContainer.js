import React from 'react'
import {Link} from 'react-router-dom'

const CardsContainer = (props) => {
    return(
      <div>
        <div className='cardsGrid'>
        {props.cards}
        </div>
        
        <div>
          <Link to='/decks'>Return To Decks</Link>
        </div>
      </div>
    )
  }

export default CardsContainer
