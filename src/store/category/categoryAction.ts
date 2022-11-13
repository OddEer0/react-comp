import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { apiService } from '../../services/api/api.service'
import { ICategory } from '../../types/ICategory'

export const fetchCategory = createAsyncThunk<
	ICategory[],
	undefined,
	{ rejectValue: string }
>('category/fetchCategory', async (_, thunkAPI) => {
	try {
		const response = await axios.get(apiService.categoryApi)
		return response.data
	} catch (e) {
		return thunkAPI.rejectWithValue('Что-то пошло не так')
	}
})
