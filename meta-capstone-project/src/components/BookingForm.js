import React from 'react';
import React, { useState } from 'react';

export default function BookingForm() {

    return (
       <form style={{ display: 'grid', maxWidth: '200px', gap: '20px'}}>
            <label htmlFor="res-date">Choose date</label>
            <input 
                type="date" 
                id="res-date" 
                name="date"
                value={formData.date}
                onChange={(e) => onInputChange('date', e.target.value)}    
            />
            <label>Choose time</label>
            <select 
                id="res-time"
                name="time"
                value={formData.time}
                onChange={(e) => onInputChange('time', e.target.value)} 
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
                onChange={(e) => onInputChange('guests', parseInt(e.target.value, 10))} 
                />
            <label htmlFor="occasion">Occasion</label>
            <select 
                id="occasion"
                name="occasion"
                value={formData.occasion}
                onChange={(e) => onInputChange('occasion', e.target.value)} 
            >
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation"/>
       </form>
    )
}