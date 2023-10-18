import React from 'react';

export default function Testimonials () {

  const testimonials = [
    {
      rating: '⭐️⭐️⭐️⭐️⭐️'
      photo: 'https://unsplash.com/photos/f5xiGmFwXIU?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash',
      name: 'John Doe',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      rating:'⭐️⭐️⭐️⭐️⭐️'
      photo: 'https://unsplash.com/photos/TYDLLLE7vWQ?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash',
      name: 'Jane Smith',
      review: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      rating:'⭐️⭐️⭐️⭐️⭐️'
      photo: 'https://unsplash.com/photos/4H2fivgnwRg?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash',
      name: 'Aaron Durant',
      review: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      rating:'⭐️⭐️⭐️⭐️⭐️'
      photo: 'https://unsplash.com/photos/4H2fivgnwRg?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash',
      name: 'Lea Wright',
      review: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },

    
  ];
    return (
      <div>
        <h2 className="testimonials-header">Testimonials</h2>
        <div className="testimonial-card-container">
          {testimonials.map((testimonial, index) => ( 
            <div className="testimonial-card" key={index}>
              <div className="rating">{testimonial.rating}</div>
              <img className="reviewer-photo" src={testimonial.photo} alt={testimonial.name} />
              <div className="reviewer-name">{testimonial.name}</div>
              <p className="review-text">{testimonial.review}</p>
            </div>
          ))}
        </div>
      </div>
            
        
    )
}