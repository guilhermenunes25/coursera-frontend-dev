import React, { useState, useReducer } from 'react';
import BookingForm from './BookingForm';

// Define a reducer function
function availableTimesReducer(state, action) {
  if (action.type === 'UPDATE_TIMES') {
    if (action.date === '2023-11-01') {
      return ['17:00', '18:00', '19:00'];
    } else if (action.date === '2023-11-02') {
      return ['19:00', '20:00', '21:00'];
    } else if (action.date === '2023-11-03') {
      return ['18:00', '20:00', '22:00'];
    } else {
      return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    }
  } else {
    return state;
  }
}

export default function BookingPage() {
  const [formData, setFormData] = useState({
    date: '',
    time: '17:00',
    guests: 1,
    occasion: 'Birthday',
  });

  const [availableTimes, dispatch] = useReducer(availableTimesReducer, []);

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'date') {
      // Dispatch an action to update available times based on the selected date
      dispatch({ type: 'UPDATE_TIMES', date: value });
    }
  };

  return (
    <div>
      <h1>Booking Page</h1>
      <BookingForm
        formData={formData}
        availableTimes={availableTimes}
        onInputChange={handleInputChange}
        dispatch={dispatch}
      />
    </div>
  );
}