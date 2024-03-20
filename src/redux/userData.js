import { createSlice } from '@reduxjs/toolkit';

const initialState = [
<<<<<<< HEAD
  
=======
>>>>>>> 9153bbc...  moved user's intitial users credentials from the intitial state to the server
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
    // Add updateUser action to the reducers
    updateUser: (state, action) => {
      const { userId, updatedData } = action.payload;
      return state.map(user =>
        user.id === userId ? { ...user, ...updatedData } : user
      );
    },
  },
});

export const { addFormData, signOut, changeUserPassword, addUser, updateUserInfo, deleteUser, updateUser } = userDataSlice.actions;

export default userDataSlice.reducer;
