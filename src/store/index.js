import { configureStore } from '@reduxjs/toolkit';
import { someReducer } from './Reducers/counterReducer'
export const store = configureStore({
  reducer: {
    someReducer,
  },
});
