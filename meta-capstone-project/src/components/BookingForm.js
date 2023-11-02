import React from 'react';
import React, { useState } from 'react';

export default function BookingForm() {

    const [formData, setFormData] = useState ({
        date: '',
        time: '17:00',
        guests: 1,
        occasion: 'Birthday',
    });

    const [availableTimes] = useState ([
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
    ]);

    //function to handle changes in the form fields
    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
       <form style={{ display: 'grid', maxWidth: '200px', gap: '20px'}}>
            <label htmlFor="res-date">Choose date</label>
            <input 
                type="date" 
                id="res-date" 
                name="date"
                value={formData.date}
                onChange={handleInputChange}    
            />
            <label>Choose time</label>
            <select 
                id="res-time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
            >
                {availableTimes.map((time) => (
                    <option key={time} value={time}>
                        {time}
                    </option>
                ))}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input 
                type="number" 
                placeholder="1" 
                min="1" 
                max="10" 
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleInputChange}
                />
            <label htmlFor="occasion">Occasion</label>
            <select 
                id="occasion"
                name="occasion"
                value={formData.occasion}
                onChange={handleInputChange}
            >
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation"/>
       </form>
    )
}