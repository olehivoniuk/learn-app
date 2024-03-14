import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, username: 'Ivan_st1', firstName: "Ivan", lastName: "Ivanov", password: 'pass1', role: 'student', isLoggedIn: false, dob: '12.11.1997', address: "Kyiv", email: "ivan@gmail.com" },
  { id: 2, username: 'Petro_st2', firstName: "Petro", lastName: "Petrov", password: 'pass2', role: 'student', isLoggedIn: false, dob: '11.10.1990', address: "Lviv", email: "Petro@gmail.com" },
  { id: 3, username: 'Vasyl_tr1', firstName: "Vasil", lastName: "Vasiliuk", specialization: "Python", password: 'password1', role: 'trainer', isLoggedIn: false },
  { id: 4, username: 'Borys_tr2', firstName: "Borys", lastName: "Borysov", specialization: "Java", password: 'password2', role: 'trainer', isLoggedIn: false },
  
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
    updateUserInfo: (state, action) => {
      const { userId, updatedInfo } = action.payload;
      return state.map(user =>
        user.id === userId ? { ...user, ...updatedInfo } : user
      ); // Return a new array with updated user information
    },
    deleteUser: (state, action) => {
      const userIdToDelete = action.payload;
      return state.filter(user => user.id !== userIdToDelete);
    },
  },
});

export const { addFormData, signOut, changeUserPassword, addUser, updateUserInfo, deleteUser } = userDataSlice.actions;

export default userDataSlice.reducer;
