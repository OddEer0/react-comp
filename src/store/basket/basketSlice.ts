import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IDevice } from '../../types/IDevice'

interface BasketState {
	basketItem: IDevice[]
}

const initialState: BasketState = {
	basketItem: [],
}

const basketSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {
		addBasketItem(state, action: PayloadAction<IDevice>) {
			state.basketItem.push(action.payload)
		},
		removeBasketItem(state, action: PayloadAction<number | string>) {
			state.basketItem = state.basketItem.filter(
				item => item.id !== action.payload
			)
		},
	},
})

export const { addBasketItem, removeBasketItem } = basketSlice.actions

export default basketSlice.reducer
