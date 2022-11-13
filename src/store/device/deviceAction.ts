import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { apiService } from '../../services/api/api.service'
import {
	IDevice,
	IDeviceOption,
	IFilterDeviceOptions,
} from '../../types/IDevice'

export const fetchDevice = createAsyncThunk<
	IDevice[],
	IDeviceOption,
	{ rejectValue: string }
>('device/fetchDevice', async (param, thunkAPI) => {
	try {
		return (await axios.get(apiService.getCategoryDevice(param.category, 20)))
			.data
	} catch (e) {
		return thunkAPI.rejectWithValue('Что-то пошло не так')
	}
})

export const fetchFilterDevice = createAsyncThunk<
	IDevice[],
	IFilterDeviceOptions,
	{ rejectValue: string }
>('device/fetchFilterDevice', async (param, thunkAPI) => {
	try {
		return (
			await axios.get(
				apiService.getFilteredDevice(
					param.category,
					param.field,
					param.page,
					param.asc,
					param.limit
				)
			)
		).data
	} catch (e) {
		return thunkAPI.rejectWithValue('Что-то пошло не так')
	}
})
