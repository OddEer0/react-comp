import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { IDevice, IDeviceOption } from '../../types/IDevice'

export const fetchDevice = createAsyncThunk<
	IDevice[],
	IDeviceOption,
	{ rejectValue: string }
>('device/fetchDevice', async (param, thunkAPI) => {
	try {
		const response = await axios.get(
			`https://632feb2ef5fda801f8d8053d.mockapi.io/device?category=${param.category}`
		)
		return response.data
	} catch (e) {
		return thunkAPI.rejectWithValue('Что-то пошло не так')
	}
})
