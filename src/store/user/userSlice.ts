import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../../types/IUser'

const initialState: IUser = {
	id: null,
	email: null,
	password: null,
	name: null,
	role: 'anonym',
	img: null,
	theme: 'dark',
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser(state, action: PayloadAction<IUser>) {
			return (state = action.payload)
		},
		removeUser(state) {
			return (state = initialState)
		},
		setTheme(state, action: PayloadAction<string>) {
			document.body.dataset.theme = action.payload
			state.theme = action.payload
		},
	},
})

export const { setUser, removeUser, setTheme } = userSlice.actions

export default userSlice.reducer
