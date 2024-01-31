import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Auth';
import flightReducer from './Flights';
import BookingReducer from './Booking';

const store = configureStore({
  reducer: {
    auth: authReducer, 
    flight:flightReducer,
    booking:BookingReducer
  },
});

export default store;
