import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: false,
	channels: [],
	users: []
}

const auth = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state, action) => {
			state.user = action.payload
			//localStorage.setItem('user', JSON.stringify(action.payload))
		},
		logout: (state) => {
			state.user = false
		},
		setChannels: (state, action) => {
			state.channels = action.payload
		},
		setUsers: (state, action) => {
			state.users = action.payload
		}
	}
})

export const { login, logout, setChannels, setUsers } = auth.actions
export default auth.reducer
