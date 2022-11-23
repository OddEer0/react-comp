import { combineReducers } from '@reduxjs/toolkit'
import basketReducer from './basket/basketSlice'
import categoryReducer from './category/categorySlice'
import deviceReducer from './device/deviceSlice'
import favoriteReducer from './favorite/favoriteSlice'
import userReducer from './user/userSlice'

export const rootReducer = combineReducers({
	basket: basketReducer,
	device: deviceReducer,
	category: categoryReducer,
	user: userReducer,
	favorite: favoriteReducer,
})
