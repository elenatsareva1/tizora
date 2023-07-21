import React from "react";
import '../styles/App.css';
import '../styles/About.css';

export default function About() {
    return (
        <>
            <div className="about container">
                <div className="about-left">
                    <h1 className="about-title">О галерее</h1>
                    <div className="about-text-block">
                        <p className="about-text">
                        Галерея современного искусства — «Tizora Gallery» создана в 2022 году.
                        </p>
                        <p className="about-text">
                        Направление деятельности галереи — живопись, фотография, digital art.
                        </p>
                        <p className="about-text">
                        Мы представляем более тридцати современных художников России, Израиля, Черногории и Италии.
                        </p>
                    </div>                    
                    <div className="about-left__icons-block">
                        <img className="about-left__icons" src="../../public/images/About/1icon.svg" alt="icon"/>
                        <img className="about-left__icons" src="../../public/images/About/2icon.svg" alt="icon"/>
                        <img className="about-left__icons" src="../../public/images/About/3icon.svg" alt="icon"/>
                        <img className="about-left__icons" src="../../public/images/About/4icon.svg" alt="icon"/>
                    </div>
                </div>
                <div className="about-right">
                    <div className="about-right__image-block"></div>
                    <div className="about-right__text-block">
                        <h2 className="about-right__title">NFT</h2>
                        <p className="about-right__text">
                            «Tizora Gallery» объединяет искусство и современные технологии.
                            Все произведения представлены в единственном экземпляре, и доступны к приобретению на ваше усмотрение: оригинал картины, либо оригинал картины + NFT (цифровое произведение искусства).
                        </p>
                    </div>
                    
                </div>
            </div>
            <div className="mission">
                <div className="title-div mission-title-div">
                    <h2 className="title mission-title">Миссия</h2>
                </div>
                <div className="mission-wrapper">
                    <div className="mission-item mission-item__first">
                        <img className="mission-icon" src="../../images/About/mission1.svg" alt="mission1"/>
                        <p className="mission-text">
                        Сохранить и популяризировать арт объекты на стыке искусства и технологий.
                        </p>
                    </div>
                    <div className="mission-item mission-item__first">
                        <img className="mission-icon" src="../../images/About/mission2.svg" alt="mission2"/>
                        <p className="mission-text">
                        Поддержка молодых художников
                        </p>
                    </div>
                </div>
            </div>

            <div className="goals">
                <div className="title-div goals-title-div">
                    <h2 className="title goals-title">Цели</h2>
                </div>
                <div className="goals-wrapper">
                    <img className="goals-img" src="../../images/About/goals-img.svg" alt="goals" />
                    <div className="goals-item">
                        <p className="goals-text">
                        Обеспечение и гарантия продажи подлинного произведения, предоставление всех необходимых документов для получения прав собственности.
                        </p>
                    </div>
                    <div className="goals-item">
                        <p className="goals-text">
                        Создание комфортных условий для художников и популяризации их творчества на просторах России, Израиля и других стран.
                        </p>
                    </div>
                </div>
            </div>

            <div className="video-div">
                <img className="video-img" src="../../images/About/videoimg.png" alt="video"/>                
                <img className="video-btn" src="../../images/About/videobtn.png" alt='video'/>                
            </div>
            
        </>
    )
}