import React from 'react';
import '../styles/SpecialOffersStyle.css';
import greekSalad from '../assets/greek-salad.jpg';
import bruschettaImg from '../assets/bruschetta.jpg';
import lemonDessert from '../assets/lemon-dessert.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';



export default function EspecialOffers () {
    return (
        <>
            <div className="container">
                <div className="header-content">
                    <h2 className="main-header">This Weeks Specials!</h2>
                        <button className="online-menu-button">Online Menu</button>
                </div>
                <div className="cards-container">
                    <div className="card" id="card1">
                        <img src={greekSalad} alt="greek-salad" />
                            <div className="card-header">
                                <h2 className="card-title">Greek Salad</h2>
                                    <p className="card-price">$12.99</p>
                    </div>
                         <p className="card-description">
                        The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
                         </p>
                         <FontAwesomeIcon icon={faBasketShopping} style={{ color: '#333333' }} />
                                <a href="#" className="card-button">Order a delivery</a>
                </div>
                <div className="card" id="card2">
                    <img src={bruschettaImg} alt="bruschetta"/>
                         <div className="card-header">
                            <h2 className="card-title">Bruschetta</h2>
                                <p className="card-price">$5.99</p>
                    </div>
                         <p className="card-description">
                        Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                         </p>
                         <FontAwesomeIcon icon={faBasketShopping} style={{ color: '#333333' }} />
                                <a href="#" className="card-button">Order a delivery</a>
                </div>
                <div className="card" id="card3">
                    <img src={lemonDessert} alt="lemon-dessert"/>
                         <div className="card-header">
                             <h2 className="card-title">Lemon Dessert</h2>
                                <p className="card-price">$5.00</p>
                    </div>
                        <p className="card-description">
                        This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined. 
                        </p>
                        <FontAwesomeIcon icon={faBasketShopping} style={{ color: '#333333' }} />
                                <a href="#" className="card-button">Order a delivery</a>
                        </div>
                    </div>
                </div>
        </>
        )
}