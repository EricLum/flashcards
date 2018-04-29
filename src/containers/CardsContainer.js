import React from 'react'

const CardsContainer = (props) => {
    return(
      <div>
        <div className='cardsGrid'>
        {props.cards}
        </div>
      </div>
    )
  }
  
export default CardsContainer
