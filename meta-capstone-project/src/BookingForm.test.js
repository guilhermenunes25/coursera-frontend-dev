import { updateTimes, initializeTimes } from './components/BookingPage';

test('updateTimes returns the same value provided in the state', () => {
  const currentState = { availableTimes: ['09:00', '10:00', '11:00'] };

  const result = updateTimes(currentState);
  expect(result).toEqual(currentState.availableTimes);
});

test('initializeTimes returns the expected array of times', () => {
  const expectedTimes = [
    '09:00', '10:00', '11:00'
  ];

  const result = initializeTimes();
  expect(result).toEqual(expectedTimes);
});