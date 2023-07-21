import React from 'react'
import '../styles/App.css'
import '../styles/HeroSection.css'

function HeroSection() {
  return (
    <div className='hero-container container'>        
        <h1 className='hero-title'>галерея-музей</h1>
        <h2 className='hero-subtitle'>современного искусства</h2>
        <span className='hero-arrow'>
          <svg width="68" height="111" viewBox="0 0 68 111" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="34" cy="76.5" r="33.5" stroke="#505050"/>
            <path d="M22.667 81.3361L34.0003 92.6905M34.0003 92.6905L45.3337 81.3361M34.0003 92.6905V0" stroke="#5E5E5E"/>
          </svg>
        </span>
    </div>
  )
}

export default HeroSection