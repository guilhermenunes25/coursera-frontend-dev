import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookingForm from "./BookingForm";


describe('BookingForm component', () => {
  test('HTML5 validation for date input', () => {
    render(<BookingForm />);
    const dateInput = screen.getByLabelText('Choose a date');
    fireEvent.change(dateInput, { target: {value: ''} });
    expect(dateInput).toHaveAttribute('required');
  });

  test('HTML5 validation for time select', () => {
    render(<BookingForm availableTimes={['10:00', '12:00']}/>);
    const timeSelect = screen.getByLabelText('Choose a time');
    fireEvent.change(timeSelect, { target: {value: ''} });
    expect(timeSelect).toHaveAttribute('required');
  });

  test('HTML5 validation for guests input', () => {
    render(<BookingForm />);
    const guestsInput = screen.getByLabelText('Number of guests');
    fireEvent.change(guestsInput, { target: { value: '' } });
    expect(guestsInput).toHaveAttribute('required');
    fireEvent.change(guestsInput, { target: { value: '0' } });
    expect(guestsInput).toHaveAttribute('required');

    test('HTML5 validation for occasion select', () => {
      render(<BookingForm />);
      const occasionSelect = screen.getByLabelText('Occasion');
      fireEvent.change(occasionSelect, { target: { value: '' } });
      expect(occasionSelect).toHaveAttribute('required');
    });
  });

  test('Valid form submission', () => {
    render(<BookingForm />);
    const dateInput = screen.getByLabelText('Choose a date');
    const timeSelect = screen.getByLabelText('Choose a time');
    const guestsInput = screen.getByLabelText('Number of guests');
    const occasionSelect = screen.getByLabelText('Occasion');
    const submitButton = screen.getByText('Make Your reservation');

    fireEvent.change(dateInput, { target: { value: '2023-12-01' } });
    fireEvent.change(timeSelect, { target: { value: '12:00' } });
    fireEvent.change(guestsInput, { target: { value: '2' } });
    fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });

    expect(submitButton).not.toBeDisabled();
  });

  test('Invalid form submission', () => {
    render(<BookingForm />);
    const submitButton = screen.getByText('Make Your reservation');

    // Submit without filling in any fields
    fireEvent.click(submitButton);
    expect(submitButton).toBeDisabled();

    // Submit with incomplete fields
    const dateInput = screen.getByLabelText('Choose a date');
    const timeSelect = screen.getByLabelText('Choose a time');
    const guestsInput = screen.getByLabelText('Number of guests');
    const occasionSelect = screen.getByLabelText('Occasion');

    fireEvent.change(dateInput, { target: { value: '2023-12-01' } });
    fireEvent.click(submitButton);
    expect(submitButton).toBeDisabled();

    fireEvent.change(timeSelect, { target: { value: '12:00' } });
    fireEvent.click(submitButton);
    expect(submitButton).toBeDisabled();

    fireEvent.change(guestsInput, { target: { value: '2' } });
    fireEvent.click(submitButton);
    expect(submitButton).toBeDisabled();

    fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });
    fireEvent.click(submitButton);
    expect(submitButton).not.toBeDisabled();
  });
})