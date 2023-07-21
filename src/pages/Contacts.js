import React from "react";
import '../styles/App.css';
import '../styles/Contacts.css';
import Iframe from "react-iframe";
import moscow from '../images/moscow.svg';
import dubai from '../images/dubai.svg';

export default function Contacts() {
    return (
    <>
    <div className="contacts__img-wrapper container">
        <div className="contacts-title-div">
            <h1 className="contacts-title">Контакты</h1>
        </div>
        <div className="contacts-img-div"></div>
    </div>
    <div className="contacts__info-wrapper container">
        <div className="contacts__info-rus">
            <h2 className="contacts-subtitle">Россия, Москва</h2>
            <div className="contact-line flex">
                <svg className="contact-icon" width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Vector" d="M7.54066 9.87646C7.54066 11.348 8.75031 12.5478 10.2265 12.5478C11.7027 12.5478 12.9124 11.348 12.9124 9.87646C12.9124 8.4049 11.7027 7.20512 10.2265 7.20512C8.75031 7.20512 7.54066 8.4049 7.54066 9.87646ZM0.934895 10.1146C0.934895 4.3568 5.34562 0.642903 10.2265 0.642903C15.1074 0.642903 19.5182 4.3568 19.5182 10.1146C19.5182 12.012 18.75 14.113 17.1717 16.4257C15.6253 18.6916 13.313 21.1431 10.2265 23.781C7.14001 21.1431 4.82778 18.6916 3.28136 16.4257C1.70305 14.113 0.934895 12.012 0.934895 10.1146Z" stroke="white" stroke-width="0.580727"/>
                </svg>  
                <p className="contacts-text">
                    ул. Ильинка, дом 4, 1 этаж, вход 19А (Гостиный Двор) 
                </p>
            </div>
            <div className="contact-line flex">
                <svg className="contact-icon" width="13" height="21" viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Group 27">
                    <rect id="Rectangle 71" x="0.417317" y="0.874348" width="12.1953" height="19.7447" rx="2.03254" stroke="white" stroke-width="0.580727"/>
                    <circle id="Ellipse 23" cx="6.80533" cy="17.7155" r="1.16145" stroke="white" stroke-width="0.580727"/>
                    </g>
                </svg>
                <p className="contacts-text">
                    + 7 985 458 97 97, + 7 925 528 87 05
                </p>
            </div>
            <img src={moscow} alt="Гостиный двор"/>
        </div>
        <div>
            <h2 className="contacts-subtitle">ОАЭ, Дубаи</h2>            
            <div className="contact-line flex">
                <svg className="contact-icon" width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="Vector" d="M7.54066 9.87646C7.54066 11.348 8.75031 12.5478 10.2265 12.5478C11.7027 12.5478 12.9124 11.348 12.9124 9.87646C12.9124 8.4049 11.7027 7.20512 10.2265 7.20512C8.75031 7.20512 7.54066 8.4049 7.54066 9.87646ZM0.934895 10.1146C0.934895 4.3568 5.34562 0.642903 10.2265 0.642903C15.1074 0.642903 19.5182 4.3568 19.5182 10.1146C19.5182 12.012 18.75 14.113 17.1717 16.4257C15.6253 18.6916 13.313 21.1431 10.2265 23.781C7.14001 21.1431 4.82778 18.6916 3.28136 16.4257C1.70305 14.113 0.934895 12.012 0.934895 10.1146Z" stroke="white" stroke-width="0.580727"/>
                </svg>                
                <p className="contacts-text">
                    Jumeirah Lakes Towers ALMAS Tower
                </p>
            </div>
            <div className="contact-line flex">
                <svg className="contact-icon" width="13" height="21" viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Group 27">
                    <rect id="Rectangle 71" x="0.417317" y="0.874348" width="12.1953" height="19.7447" rx="2.03254" stroke="white" stroke-width="0.580727"/>
                    <circle id="Ellipse 23" cx="6.80533" cy="17.7155" r="1.16145" stroke="white" stroke-width="0.580727"/>
                    </g>
                </svg> 
            </div>
            <img src={dubai} alt="Almas Tower"/>
        </div>
    </div>
    <div className="contacts__form-div container">
        <div>
            <h2 className="contacts-subtitle">Хотите работать с нами?</h2>
            <p className="contacts-text">Пожалуйста, заполните свои данные ниже. Мы свяжемся с вами в течение одного рабочего дня.</p>
            <form>
                <input type="text" placeholder="Имя"></input>
                <input type="text" placeholder="Фамилия"></input>
                <input type="email" placeholder="Email"></input>
                <input type="tel" placeholder="Телефон"></input>
                <textarea placeholder="Сообщение"></textarea>
                <button>Отправить</button>
            </form>
        </div>
    </div>
    </>
    )
}