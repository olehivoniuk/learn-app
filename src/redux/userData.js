import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, username: 'stud1',firstName: "Ivan", lastName: "Ivanov",  password: 'pass1', role: 'student', isLoggedIn: false },
  { id: 2, username: 'stud2',firstName: "Petro", lastName: "Petrov", password: 'pass2', role: 'student', isLoggedIn: false },
  { id: 3, username: 'Vasyl_tr1',firstName: "Vasil", lastName: "Vasiliuk",  specialization: "Python", password: 'password1', role: 'trainer', isLoggedIn: false },
  { id: 4, username: 'Borys_tr2',firstName: "Borys", lastName: "Borysov",specialization: "Java", password: 'password2', role: 'trainer', isLoggedIn: false },
  
];

const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    addFormData: (state, action) => {
      return [...state, action.payload]; // Return a new array with added form data
    },
    signOut: state => {
      return state.map(user => ({ ...user, isLoggedIn: false })); // Return a new array with updated isLoggedIn
    },
    changeUserPassword: (state, action) => {
      const { userId, newPassword } = action.payload;
      return state.map(user =>
        user.id === userId ? { ...user, password: newPassword } : user
      ); // Return a new array with updated password for the specified user
    },
    addUser: (state, action) => {
      return [...state, action.payload]; // Return a new array with added user
    },
  },
});

export const { addFormData, signOut, changeUserPassword, addUser } = userDataSlice.actions;

export default userDataSlice.reducer;
