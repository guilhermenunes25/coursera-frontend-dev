import React from 'react'
import MarioAdrianA from '../assets/mario-adrian-a.jpg'
import MarioAdrianB from '../assets/mario-adrian-b.jpg'
import '../styles/AboutStyles.css'

export default function AppAbout () {
    return (
        <div className="about-content">
        <div className="about-left">
            <h1 className="about-title">Little Lemon</h1>
                <p className="about-subtitle">Chicago</p>
                    <p className="about-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </p>
        </div>
        <div className="header-right">
            <div className="about-image-a">
        <img
            src={MarioAdrianA}  // Make sure the path is correct
            alt="About Banner"
            className="restaurant-banner"
        />  
          </div>
          <div className="about-image-b">
        <img
            src={MarioAdrianB}  // Make sure the path is correct
            alt="Restaurant Banner"
            className="restaurant-banner"
        />
          </div>
        </div>
    </div>
    )
}