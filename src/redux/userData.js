import { createSlice } from '@reduxjs/toolkit';

// Existing initial state
const initialState = [
  { id: 1, username: 'stud1', password: 'pass1', role: 'student', isLoggedIn: false },
  { id: 2, username: 'stud2', password: 'pass2', role: 'student', isLoggedIn: false },
  { id: 3, username: 'trainer1', password: 'password1', role: 'trainer', isLoggedIn: false },
  { id: 4, username: 'trainer2', password: 'password2', role: 'trainer', isLoggedIn: false },
];

const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    addFormData: (state, action) => {
      state.push(action.payload); // Add the form data to the array
    },
    signOut: state => {
      // Update isLoggedIn to false for all users
      state.forEach(user => {
        user.isLoggedIn = false;
      });
    },
  },
});

export const { addFormData, signOut } = userDataSlice.actions;

export default userDataSlice.reducer;
