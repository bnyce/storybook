import { configureStore } from '@reduxjs/toolkit';
//import counterReducer from '../features/counter/counterSlice';
//import authReducer from '../features/auth/authSlice';
import eventReducer from '../components/eventSlice';
import ahcPageReducer from '../components/AhcPageSlice';
//import slrReservationReducer from '../features/slrReservation/slrReservationSlice';

export const store = configureStore({
  reducer: {
  //  counter: counterReducer,
//    auth: authReducer,
    event: eventReducer,
    ahcPage: ahcPageReducer,
//    slrReservation: slrReservationReducer,
  },

});


export default store;