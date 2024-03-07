import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import userData from './userData';

export default configureStore({
  reducer: {
    data: userData,
  },
}, composeWithDevTools());