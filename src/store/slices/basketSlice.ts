import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface BasketState {
	basketItem: string[]
}

const initialState: BasketState = {
	basketItem: [],
}

const basketSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {
		addBasketItem(state, action: PayloadAction<string>) {
			console.log(action.payload)
			return state
		},
	},
})

export default basketSlice.reducer
