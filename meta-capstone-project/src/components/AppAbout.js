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
            <div className="mario-adrian-a-container">
              <img
                src={MarioAdrianA}
                alt="Mario Adrian A"
                className="mario-adrian-a"
              />
            </div>
            <div className="mario-adrian-b-container">
              <img
                src={MarioAdrianB}
                alt="Mario Adrian B"
                className="mario-adrian-b"
              />
            </div>
          </div>
        </div>
      </div>
    )
}