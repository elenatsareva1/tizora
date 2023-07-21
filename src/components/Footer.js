import React from 'react'
import '../styles/Footer.css'
import '../styles/App.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <span className='footer__border'></span>
            <div className='footer-container container'>
                <Link to="/" className="footer-logo">
                            <img
                            src="../../images/Logo_footer.svg"
                            height="48"
                            width="228"
                            className="header__logo"
                            alt="Tizora logo"
                            />
                </Link>
                <ul className='footer-menu'>                 
                    <li className='footer-item'>
                      <Link to='/' className='footer-links'>
                        Главная
                      </Link>
                    </li>
                    <li className='footer-item'>
                      <Link to='/about' className='footer-links'>
                        О галерее
                      </Link>
                    </li>
                    <li className='footer-item'>
                      <Link to='/paintings' className='footer-links'>
                        Картины
                      </Link>
                    </li>
                    <li className='footer-item'>
                      <Link to='/events' className='footer-links'>
                        Мероприятия
                      </Link>
                    </li>
                    <li className='footer-item'>
                      <Link to='/contacts' className='footer-links'>
                        Контакты
                      </Link>
                    </li>
                                     
                </ul>
            </div>
            <span className='footer__border'></span>
            <div className='footer-copyright-block'>
                <p>Все права защищены 2023</p>
            </div>   
        </>
    )
};  


export default Footer


            
                
                
            
             