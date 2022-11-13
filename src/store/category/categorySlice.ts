import { AnyAction, createSlice } from '@reduxjs/toolkit'
import { ICategory } from '../../types/ICategory'
import { fetchCategory } from './categoryAction'

interface CategoryState {
	categoryItem: ICategory[]
	isLoading: boolean
	error: string | null
}

const initialState: CategoryState = {
	categoryItem: [],
	isLoading: false,
	error: null,
}

const categorySlice = createSlice({
	name: 'category',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchCategory.pending, state => {
				state.error = null
				state.isLoading = true
			})
			.addCase(fetchCategory.fulfilled, (state, action) => {
				state.isLoading = false
				state.categoryItem = action.payload
			})
			.addMatcher(
				(action: AnyAction) => action.type.endsWith('rejected'),
				(state, action) => {
					state.isLoading = false
					state.error = action.payload
				}
			)
	},
})

export default categorySlice.reducer
