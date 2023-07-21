import React from 'react'
import CardsItemPaintings from './CardsItemPaintings'
import artistsData from '../artists-data.json'

function CardsPaintings(props) {
  return (
    <div>
      
      {artistsData.map((item) => {
        return (
          <ul>
            <CardsItemPaintings props={item} />
          </ul>
        )
      })}
    </div>
  )
}

export default CardsPaintings