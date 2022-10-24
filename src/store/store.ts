/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './slices/basketSlice'
import deviceReducer from './slices/deviceSlice'

const store = configureStore({
	reducer: {
		basket: basketReducer,
		device: deviceReducer,
	},
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
