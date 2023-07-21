import React from "react";
import '../styles/App.css';
import '../styles/Paintings.css'
import { Link } from "react-router-dom";
import Title from "../components/Title";
import CardsItemPaintings from "../components/CardsItemPaintings";

export default function Products() {
    return (
        <div>
            <div className="paintings-main-div container">
                <div className="paintings-title-div">
                    <h1 className="paintings-title">Картины</h1>
                    <div className="paintings-links-div">
                        <Link to='#' className='paintings-link'>Сергей Антипов</Link>
                        <Link to='#' className='paintings-link'>Наим Ламидов</Link>
                        <Link to='#' className='paintings-link'>Марина Оганесян</Link>
                        <Link to='#' className='paintings-link'>Петр Осинин</Link>
                    </div>                    
                </div>
                <div className="paintings-img-div"></div>
            </div>

            <div className="paintings-cards-div container">
                <div className="">

                <Title artist="Сергей Антипов"/>
                <ul className="cards-paintings__list">
                    <CardsItemPaintings src="../images/Paintings/sergey_antipov/sergey_antipov_1.jpg" name="No name" info="80 x 120 см"  />
                    <CardsItemPaintings src="../images/Paintings/sergey_antipov/sergey_antipov_2.jpg" name="No name" info="80 x 120 см"/>
                    <CardsItemPaintings src="../images/Paintings/sergey_antipov/sergey_antipov_3.jpg" name="No name" info="80 x 120 см"/>
                    <CardsItemPaintings src="../images/Paintings/sergey_antipov/sergey_antipov_4.jpg" name="No name" info="80 x 120 см"/>
                    <CardsItemPaintings src="../images/Paintings/sergey_antipov/sergey_antipov_5.jpg" name="No name" info="80 x 120 см"/>
                    <CardsItemPaintings src="../images/Paintings/sergey_antipov/sergey_antipov_6.jpg" name="No name" info="80 x 120 см"/>
                </ul>

                <Title artist="Наим Ламидов" path="/artist/naim_lamidov"/>
                <ul className="cards-paintings__list">
                    <CardsItemPaintings src="../images/Paintings/naim_lamidov/naim_lamidov_1.jpg" name="No name" info="80 x 120 см" path="/painting/naim_lamidov_1"/>
                    <CardsItemPaintings src="../images/Paintings/naim_lamidov/naim_lamidov_2.jpg" name="No name" info="80 x 120 см"/>
                    <CardsItemPaintings src="../images/Paintings/naim_lamidov/naim_lamidov_3.jpg" name="No name" info="80 x 120 см"/>
                    <CardsItemPaintings src="../images/Paintings/naim_lamidov/naim_lamidov_5.jpg" name="No name" info="80 x 120 см"/>
                    <CardsItemPaintings src="../images/Paintings/naim_lamidov/naim_lamidov_7.jpg" name="No name" info="80 x 120 см"/>
                    <CardsItemPaintings src="../images/Paintings/naim_lamidov/naim_lamidov_6.jpg" name="No name" info="80 x 120 см"/>

                </ul>

                <Title artist="Марина Оганесян"/>
                <ul className="cards-paintings__list">
                    <CardsItemPaintings src="../images/Paintings/marina_oganesyan/marina_oganesyan_1.jpg" name="No name" info="80 x 120 см"/>
                    <CardsItemPaintings src="../images/Paintings/marina_oganesyan/marina_oganesyan_2.jpg" name="No name" info="80 x 120 см"/>
                </ul>

                <Title artist="Петр Осинин" path="/artist/petr_osinin"/>
                <ul className="cards-paintings__list">
                    <CardsItemPaintings src="../images/Paintings/petr_osinin/petr_osinin_1.jpg" name="No name" info="80 x 120 см"/>
                    <CardsItemPaintings src="../images/Paintings/petr_osinin/petr_osinin_2.jpg" name="No name" info="80 x 120 см"/>
                </ul>
                
                </div>
            </div>
        </div>
    )
}