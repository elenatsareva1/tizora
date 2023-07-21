import React from 'react';
import '../styles/App.css'
import HeroSection from '../components/HeroSection'
import CardsMain from '../components/CardsMain';

function Home () {
    return(
        <>
            <HeroSection />
            <CardsMain />            
        </>
    )
}

export default Home;