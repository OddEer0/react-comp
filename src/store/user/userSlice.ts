import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../../types/IUser'

const initialState: IUser = {
	id: null,
	email: null,
	password: null,
	name: null,
	role: 'anonym',
	img: null,
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
	},
})

export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducer
