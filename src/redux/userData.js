import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { id: 1, username: 'student1', password: 'password1' },
    { id: 2, username: 'student2', password: 'password2' },
    { id: 3, username: 'trainer1', password: 'password1' },
    { id: 4, username: 'trainer2', password: 'password2' },
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