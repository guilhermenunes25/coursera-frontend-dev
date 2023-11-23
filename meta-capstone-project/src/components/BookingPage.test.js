import { initializeTimes, updateTimes } from './BookingPage';

jest.mock('./BookingPage', () => ({
  fetchData: jest.fn(() => Promise.resolve(['09:00', '10:00', '11:00'])),
}));

test('initializeTimes updates the state with expected array of times', async () => {
  const dispatch = jest.fn();

  await initializeTimes(dispatch);

  expect(dispatch).toHaveBeenCalledWith({
    type: 'UPDATE_TIMES',
    availableTimes: ['09:00', '10:00', '11:00'],

  });
})

jest.mock('./BookingPage', () => ({
  fetchData: jest.fn((date) => Promise.resolve(['12:00', '13:00', '14:00'])),
}));

test('updateTimes updates the state with the fetched array of times for a specific date', async () => {
  const dispatch = jest.fn();
  const selectedDate = '2023-12-01';

  await updateTimes(selectedDate, dispatch);

  expect(dispatch).toHaveBeenCalledWith({
    type: 'UPDATE_TIMES',
    availableTimes:['12:00', '13:00', '14:00'],
  })
})