import React, { useReducer} from 'react';
import BookingForm from './BookingForm';

export function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return {...state, availableTimes: updateTimes(action.selectedDate)};
    default:
      return state;
    }
}

export function updateTimes(selectedDate) {
  const baseTimes = [ '09:00', '10:00', '11:00'];

  if(selectedDate) {

    return baseTimes.concat ([
      '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
    ]);
  } else {
    return baseTimes;
  }
}

export function initializeTimes() {
  return updateTimes(null);
}

export const initialState = {
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

