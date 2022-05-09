import { configureStore } from '@reduxjs/toolkit';
import changeReducer from './changerSlice';

export const store = configureStore({
  reducer: {
    changer: changeReducer, 
  },
});
