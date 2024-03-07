import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    sendData: (state, action) => {
      const newData = {
        ...action.payload,
        id: new Date().toISOString(), // Generate a unique id using the current timestamp
      };
      state.data.push(newData);
    },
  },
});

export const { sendData } = userDataSlice.actions;

export default userDataSlice.reducer;
