import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, username: 'stud1', password: 'pass1', role: 'student' },
  { id: 2, username: 'stud2', password: 'pass2', role: 'student' },
  { id: 3, username: 'trainer1', password: 'password1', role: 'trainer' },
  { id: 4, username: 'trainer2', password: 'password2', role: 'trainer' },
];

const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    addFormData: (state, action) => {
      state.push(action.payload); // Add the form data to the array
    },
  },
});

export const { addFormData } = userDataSlice.actions;

export default userDataSlice.reducer;