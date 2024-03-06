import { createSlice } from '@reduxjs/toolkit';

export const userData = createSlice({
	name: 'userData',
	initialState: [],
	reducers: {
		sentData: (state, action) => {
			const userData = {
				id: new Date(),
				sentInfo: action.payload.sentInfo,
				completed: false,
			};
			state.push(userData);
		},

	},
});


export const { addTodo } = userData.actions;

export default userData.reducer;