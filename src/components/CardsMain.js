import React from 'react'
import CardItemMain from './CardItemMain'
import '../styles/Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItemMain src='images/NaimLamidov.jpg' text='Наим Ламидов' path='/naim_lamidov' />
                    <CardItemMain src='images/MOganesyan.jpg' text='Мария Оганесян' path='/mariya_oganesyan' />                    
                </ul>
                <ul className='cards__items'>
                    <CardItemMain src='images/POsinin.jpg' text='Петр Осинин' path='/petr_osinin' />
                    <CardItemMain src='images/SAntipov.jpg' text='Сергей Антипов' path='/sergey_antipov' />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards