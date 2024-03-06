import { createSlice } from '@reduxjs/toolkit';

export const userDataSlice = createSlice({
	name: 'userData',
	initialState: [],
	reducers: {
		sendData: (state, action) => {
			const userData = {
				id: new Date(),
				info: action.payload.info,
				completed: false,
			};
			state.push(userData);
		},

	},
});


export const { sendData } = userDataSlice.actions;

export default userDataSlice.reducer;