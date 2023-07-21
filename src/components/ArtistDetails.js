import React from 'react'
import Title from './Title'
import CardsItemPaintings from './CardsItemPaintings'
import '../styles/ArtistDetails.css'


function ArtistDetails(props) {
  return (
    <div>
        <div className='artist-info__wrapper container'>
            <div>
              <img className='artist-img' src={props.img} alt={props.name}></img>
            </div>
            <div>
                <h1 className='artist-details__title'>{props.name}</h1>
                <p className='artist-details__text'>{props.text1}</p>
                <p className='artist-details__text'>{props.text2}</p>
                <p className='artist-details__text'>{props.text3}</p>
                <p className='artist-details__text'>{props.text4}</p>
                <p className='artist-details__text'>{props.text5}</p>
                <p className='artist-details__text'>{props.text6}</p>
                <p className='artist-details__text'>{props.text7}</p>
                <p className='artist-details__text'>{props.text8}</p>
                <p className='artist-details__text'>{props.text9}</p>
                <p className='artist-details__text'>{props.text10}</p>
            </div>
            
        </div>
        <Title artist="Галерея работ"/>
        <div className="paintings-cards-div container">
            <ul className="cards-paintings__list">
                        <CardsItemPaintings src="../../images/Paintings/naim_lamidov/naim_lamidov_1.jpg" name="No name" info="80 x 120 см"/>
                        <CardsItemPaintings src="../../images/Paintings/naim_lamidov/naim_lamidov_2.jpg" name="No name" info="80 x 120 см"/>
                        <CardsItemPaintings src="../../images/Paintings/naim_lamidov/naim_lamidov_3.jpg" name="No name" info="80 x 120 см"/>
                        <CardsItemPaintings src="../../images/Paintings/naim_lamidov/naim_lamidov_5.jpg" name="No name" info="80 x 120 см"/>
                        <CardsItemPaintings src="../../images/Paintings/naim_lamidov/naim_lamidov_7.jpg" name="No name" info="80 x 120 см"/>
                        <CardsItemPaintings src="../../images/Paintings/naim_lamidov/naim_lamidov_6.jpg" name="No name" info="80 x 120 см"/>

            </ul>
        </div>
    </div>
  )
}

export default ArtistDetails