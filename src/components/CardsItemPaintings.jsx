import React from 'react'
import { Link } from 'react-router-dom'

function CardsItemPaintings(props) {
  return (
    <>
        <li className='cards-paintings__item'>
            <Link className='cards-paintings__item__link' to={props.path}>
                <figure className='cards-paintings__item__pic-wrap'>
                    <img src={props.src} className='cards-paintings__item__img' alt='painting'/>
                </figure>
                <div className='cards-paintings__item__info'>
                    <h3 className='cards-paintings__item__title'>{props.name}</h3>
                    <h4 className='cards-paintings__item__text'>{props.info}</h4>
                </div>
            </Link>
        </li>
    </>
  )
}

export default CardsItemPaintings