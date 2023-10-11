import React from 'react';
import MainStyle from '../styles/MainStyle.css';


export default function Main () {
    return (
        <>
            <div div className="container">
                <h2 className="main-header">This Weeks Specials!</h2>
                <div className="card" id="card1">
                    <h2 className="card-title">Our Menu</h2>
                    <img src="assets/menu.jpg" alt="menu-card" />
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, eos fugiat nisi sequi sit quaerat! Ipsa rem commodi illo adipisci nisi. Reiciendis nihil magnam reprehenderit similique esse fugiat, accusamus autem hic quod ab et adipisci numquam ex doloribus cumque inventore quibusdam ipsum, commodi saepe. Harum.
                    </p>
                    <button> Read more</button>
                </div>
                <div className="card" id="card2">
                    <h2 className="card-title">Book a Table</h2>
                    <img src="assets/book.jpg" alt="book-table"/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ex pariatur repellendus hic accusamus! Esse deserunt maxime facere sapiente minus officia ullam, vitae iure dignissimos fugit est quisquam laudantium voluptatibus neque aliquid, laboriosam voluptatem ipsa. Ab a explicabo quaerat reiciendis totam ut iure officiis nisi?
                    </p>
                    <button> Read more</button>
                </div>
                <div className="card" id="card3">
                    <h2 className="card-title">Opening Hours</h2>
                    <img src="assets/about.jpg" alt="about-info"/>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, voluptatibus consequatur non unde commodi officia a! Eligendi rem, consequatur nam, esse ipsam quasi facilis suscipit illum quae id odio dolorem itaque nemo? Blanditiis, voluptatum? Iure, blanditiis quo. Perferendis maiores soluta illum molestias ut rerum quae?
                    </p>
                    <button> Read more</button>
                </div>
                </div>
        </>
        )
}