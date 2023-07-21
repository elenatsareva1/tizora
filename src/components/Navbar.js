import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  };

  window.addEventListener('resize', showButton);

  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className="navbar-logo">
                    <img
                    src="../../images/Logo_header.svg"
                    height="48"
                    width="228"
                    className="header__logo"
                    alt="Tizora logo"
                    />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                  <svg width="32" height="10" viewBox="0 0 32 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="0.5" x2="32" y2="0.5" stroke="white"/>
                    <line x1="15" y1="9.5" x2="32" y2="9.5" stroke="white"/>
                  </svg>
                </div>
                <ul className={click? 'nav-menu active' : 'nav-menu'}>                 
                    <li className='nav-item'>
                      <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Главная
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                        О галерее
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link to='/paintings' className='nav-links' onClick={closeMobileMenu}>
                        Картины
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link to='/events' className='nav-links' onClick={closeMobileMenu}>
                        Мероприятия
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link to='/contacts' className='nav-links' onClick={closeMobileMenu}>
                        Контакты
                      </Link>
                    </li>
                                     
                  </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar
