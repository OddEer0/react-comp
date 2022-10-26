import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { ICategory } from '../../types/ICategory'

export const fetchCategory = createAsyncThunk<
	ICategory[],
	undefined,
	{ rejectValue: string }
>('category/fetchCategory', async (_, thunkAPI) => {
	try {
		const response = await axios.get(
			'https://632feb2ef5fda801f8d8053d.mockapi.io/category'
		)
		return response.data
	} catch (e) {
		return thunkAPI.rejectWithValue('Что-то пошло не так')
	}
})
