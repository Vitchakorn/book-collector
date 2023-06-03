import React from 'react'
import '../App.css'
import { Button } from './Button'
import'./HeroSection.css'

function HeroSection() {
  return (
    <div className='hero-container'>
        <img src='/book-background.jpg'></img>
        <div className="hero-content">
            <h1>Collecting your books</h1>
            <p>start here</p> 
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' 
                buttonSize='btn--large'>DISCOVER</Button>
            </div>
        </div>
    </div>
  )
}

export default HeroSection;