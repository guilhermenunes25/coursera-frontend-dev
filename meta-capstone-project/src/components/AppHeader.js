import React from 'react';
import '../styles/HeaderStyle.css'
import restaurantFoodImage from '../assets/restauranfood.jpg'


export default function AppHeader() {
return (
    <header className="header">
        <div className="header-content">
            <div className="header-left">
                <h1 className="restaurant-title">Little Lemon</h1>
                <p className="restaurant-subtitle">Chicago</p>
                <p className="restaurant-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
                   <button className="reserve-a-table-button">Reserve a Table</button>
            </div>
            <div className="header-right">
            <img
                src={restaurantFoodImage}  // Make sure the path is correct
                alt="Restaurant Banner"
                className="restaurant-banner"
/>
            </div>
        </div>
    </header>

)

}