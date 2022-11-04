import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IDevice } from '../../types/IDevice'

interface FavoriteState {
	favoriteItems: IDevice[]
}

const initialState: FavoriteState = {
	favoriteItems: [],
}

const favoriteSlice = createSlice({
	name: 'favorite',
	initialState,
	reducers: {
		addFavoriteItem(state, action: PayloadAction<IDevice>) {
			state.favoriteItems.push(action.payload)
		},
		removeFavoriteItem(state, action: PayloadAction<number>) {
			state.favoriteItems = state.favoriteItems.filter(
				item => item.id !== action.payload
			)
		},
	},
})

export const { addFavoriteItem, removeFavoriteItem } = favoriteSlice.actions

export default favoriteSlice.reducer
