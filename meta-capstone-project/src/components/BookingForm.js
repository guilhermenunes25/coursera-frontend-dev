import React, { useState } from 'react';
import '../styles/BookingFormStyling.css';

export default function BookingForm({ availableTimes, setAvailableTimes, onSubmit }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('');
  const [isFormValid, setFormValid] = useState(false);

  const handleDateChange = async (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    await setAvailableTimes(selectedDate);
    validateForm();
  };

  const validateForm = () => {
    const isValid = date !== '' && time !== '' && guests !== '' && occasion !== '';
    setFormValid(isValid);
  };

  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
    validateForm();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid) {
      const formData = {
        date,
        time,
        guests,
        occasion,
      };
      console.log('Submitting Form:', formData);
      onSubmit(formData);

      // Reset form fields
      setDate('');
      setTime('');
      setGuests('');
      setOccasion('');

      // Reset form validity
      setFormValid(false);
    } else {
      console.error('Invalid form submission. Please check your inputs');
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose a date</label>
      <input
        className='input-box'
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        required
      />

      <label htmlFor="res-time">Choose a time</label>
      <select
        className='input-box'
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        <option value="">Select a time</option>
        {availableTimes.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        className='input-box'
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        className='input-box'
        id="occasion"
        value={occasion}
        onChange={handleOccasionChange}
        required
      >
        <option value="" disabled>Select an occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input type="submit" value="Make Your Reservation" className="submit-button" />
    </form>
  );
}
