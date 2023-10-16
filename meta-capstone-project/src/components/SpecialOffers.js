import React from 'react';
import '../styles/SpecialOffersStyle.css';


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
                    <img src="assets/menu.jpg" alt="menu-card" />
                    <h2 className="card-title">Greek Salad</h2>
                    <p>
                        The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
                    </p>
                    <a href="#" className="card-button">Order a delivery</a>
                </div>
                <div className="card" id="card2">
                    <img src="assets/book.jpg" alt="book-table"/>
                    <h2 className="card-title">Bruschetta</h2>
                    <p>
                        Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                    </p>
                    <a href="#" className="card-button">Order a delivery</a>
                </div>
                <div className="card" id="card3">
                    <img src="assets/about.jpg" alt="about-info"/>
                    <h2 className="card-title">Lemon Dessert</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, voluptatibus consequatur non unde commodi officia a! Eligendi rem, consequatur nam, esse ipsam quasi facilis suscipit illum quae id odio dolorem itaque nemo? Blanditiis, voluptatum? Iure, blanditiis quo. Perferendis maiores soluta illum molestias ut rerum quae?
                    </p>
                    <a href="#" className="card-button">Order a delivery</a>
                </div>
                </div>
                </div>
        </>
        )
}