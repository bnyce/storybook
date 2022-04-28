/* A simple redux store/actions/reducer implementation.
 * A true app would be more complex and separated into different files.
 */
import { configureStore, createSlice } from '@reduxjs/toolkit';

/*
 * The initial state of our store when the app loads.
 * Usually, you would fetch this from a server. Let's not worry about that now
 */
const defaultReservations = [
  { id: '1', title: 'Something', state: 'AWAITING' },
];
const ReservationBoxData = {
  reservations: defaultReservations,
  status: 'idle',
  error: null,
};

/*
 * The store is created here.
 * You can read more about Redux Toolkit's slices in the docs:
 * https://redux-toolkit.js.org/api/createSlice
 */
const ReservationsSlice = createSlice({
  name: 'reservationbox',
  initialState: ReservationBoxData,
  reducers: {
    updateReservationState: (state, action) => {
      const { id, newReservationState } = action.payload;
      const reservation = state.reservations.findIndex((reservation) => reservation.id === id);
      if (reservation >= 0) {
        state.reservations[reservation].state = newReservationState;
      }
    },
  },
});

// The actions contained in the slice are exported for usage in our components
export const { updateReservationState } = ReservationsSlice.actions;

/*
 * Our app's store configuration goes here.
 * Read more about Redux's configureStore in the docs:
 * https://redux-toolkit.js.org/api/configureStore
 */
const store = configureStore({
  reducer: {
    reservationbox: ReservationsSlice.reducer,
  },
});

export default store;

