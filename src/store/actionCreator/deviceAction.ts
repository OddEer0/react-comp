import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { apiService } from '../../services/api/api.service'
import { IDevice, IDeviceOption } from '../../types/IDevice'

export const fetchDevice = createAsyncThunk<
	IDevice[],
	IDeviceOption,
	{ rejectValue: string }
>('device/fetchDevice', async (param, thunkAPI) => {
	try {
		const response = await axios.get(
			apiService.getCategoryDevice(param.category, 20)
		)
		return response.data
	} catch (e) {
		return thunkAPI.rejectWithValue('Что-то пошло не так')
	}
})
