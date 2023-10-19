import React from 'react';
import '../styles/TestimonialsStyle.css'
import user1 from '../assets/user1.jpg';
import user2 from '../assets/user2.jpg';
import user3 from '../assets/user3.jpg';
import user4 from '../assets/user4.jpg';

export default function Testimonials () {

  const testimonials = [
    {
      rating: 'Rating: ⭐️⭐️⭐️⭐️⭐️',
      photo: user1,
      name: 'John Doe',
      review: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      rating:'Rating: ⭐️⭐️⭐️⭐️⭐️',
      photo: user2,
      name: 'Jane Smith',
      review: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      rating:'Rating: ⭐️⭐️⭐️⭐️⭐️',
      photo: user3,
      name: 'Aaron Durant',
      review: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      rating:'Rating: ⭐️⭐️⭐️⭐️⭐️',
      photo: user4,
      name: 'Rebecca Maya',
      review: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },

    
  ];
  return (
    <div className="testimonials-container">
      <h2 className="testimonials-header">Testimonials</h2>
      <div className="testimonials-card-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonials-card" key={index}>
            <div className="rating">{testimonial.rating}</div>
            <img className="reviewer-photo" src={testimonial.photo} alt={testimonial.name} />
            <div className="reviewer-name">{testimonial.name}</div>
            <p className="review-text">{testimonial.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}