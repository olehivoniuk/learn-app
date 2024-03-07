import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import userDataReducer from './userData'; // Assuming userData.js exports a reducer

const initialState = {
  formData: [], // Initialize an empty array to store form data
};

export default configureStore({
  reducer: {
    userData: userDataReducer,
  },
  preloadedState: initialState, // Set initial state
}, composeWithDevTools());