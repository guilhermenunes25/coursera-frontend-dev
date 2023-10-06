import React from 'react';

export default function Header() {
return (
    <header className="header">
        <div className="header-content">
            <div className="header-left">
                <h1 className="restaurant-title">Little Lemon</h1>
                <p className="restaurant-subtitle">Chicago</p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                   <button className="read-more-button">Read More</button>
            </div>
            <div className="header-right">
                <img 
                src="../assets/restaurantfood.jpg"
                alt="Restaurant Banner"
                className="restaurant-banner"
                />
            </div>
        </div>
    </header>

)

}