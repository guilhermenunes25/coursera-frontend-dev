import { initializeTimes } from './BookingForm';

test('initializeTimes function returns the expected value', () => {
  const expectedTimes = [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ];

  const result = initializeTimes(); // Call the function directly

  expect(result).toEqual(expectedTimes);
});