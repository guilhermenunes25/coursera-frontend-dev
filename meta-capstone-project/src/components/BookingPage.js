import React, { useReducer, useEffect } from 'react';
import BookingForm from './BookingForm';
import '../styles/BookingFormStyling.css';
import {useNavigate} from 'react-router-dom';

const submitAPI = async (formData) => {
  console.log('Form submitted successfully:', formData);
  return true;
}

const fetchData = async (date) => {
  // Replace this with your actual API call
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

export function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return { ...state, availableTimes: action.availableTimes };
    default:
      return state;
  }
}

export async function updateTimes(selectedDate, dispatch) {
  try {
    const availableTimes = await fetchData(selectedDate);
    dispatch({ type: 'UPDATE_TIMES', availableTimes });
  } catch (error) {
    console.error('Error fetching available times:', error);
  }
}

export async function initializeTimes(dispatch) {
  try {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    await updateTimes(formattedDate, dispatch);
  } catch (error) {
    console.error('Error initializing available times:', error);
  }
}

export const initialState = {
  availableTimes: [],
};

export default function BookingPage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  useEffect(() => {
    initializeTimes(dispatch);
  }, []);

  const submitForm = async (formData) => {
    try {
      const apiResponse = await submitAPI(formData);
      if (apiResponse) {
        alert('Booking submitted successfully!');
        navigate('/reservations/confirmed');
      } else {
        console.error('Booking submission failed.');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <div>
      <h1 className="booking-header">Discover the Mediterranean Magic at Little Lemon!</h1>
      <BookingForm
        availableTimes={state.availableTimes}
        setAvailableTimes={(selectedDate) =>
          updateTimes(selectedDate, dispatch)
        }
        onSubmit={submitForm}
      />
    </div>
  );
}
