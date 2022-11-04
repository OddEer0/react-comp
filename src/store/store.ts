/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './slices/basketSlice'
import categoryReducer from './slices/categorySlice'
import deviceReducer from './slices/deviceSlice'
import favoriteReducer from './slices/favoriteSlice'
import userReducer from './slices/userSlice'

const store = configureStore({
	reducer: {
		basket: basketReducer,
		device: deviceReducer,
		category: categoryReducer,
		user: userReducer,
		favorite: favoriteReducer,
	},
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
