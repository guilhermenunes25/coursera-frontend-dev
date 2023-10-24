import React from 'react'
import MarioAdrianA from '../assets/mario-adrian-a.jpg'
import MarioAdrianB from '../assets/mario-adrian-b.jpg'
import '../styles/AboutStyles.css'

export default function AppAbout () {
    return (
        <div className="about-main">
        <div className="about-content">
        <div className="about-left">
            <h1 className="about-title">Little Lemon</h1>
                <p className="about-subtitle">Chicago</p>
                    <p className="about-description">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
        </div>
        <div className="about-right">
          <div className="about-image-container">
            <div className="about-image-a-container">
              <img
                src={MarioAdrianA}
                alt="Image A"
                className="about-image-a"
              />
            </div>
            <div className="about-image-b-container">
              <img
                src={MarioAdrianB}
                alt="Image B"
                className="about-image-b"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}