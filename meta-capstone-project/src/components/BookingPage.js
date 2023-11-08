import React, { useState, useReducer} from 'react';
import BookingForm from './BookingForm';

function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return {...state, availableTimes: updateTimes(action.selectedDate)};
    default:
      return state;
    }
}

function updateTimes(selectedDate) {
  return [
    '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
  ];
}

function initializeTimes() {
  return updateTimes(null);
}

const initialState = {
  availableTimes: initializeTimes(), 
}

export default function BookingPage() {
  
  const [state, dispatch] = useReducer(reducer, { availableTimes: initializeTimes() });

  return (
    <div>
      <h1>Booking Page</h1>
      <BookingForm
        availableTimes={state.availableTimes}
        setAvailableTimes={(selectedDate) =>
          dispatch({ type: 'UPDATE_TIMES', selectedDate })
        }
      />
    </div>
  );
}

