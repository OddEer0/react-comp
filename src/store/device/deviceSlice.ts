import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IDevice } from '../../types/IDevice'
import { fetchDevice, fetchFilterDevice } from './deviceAction'

interface DeviceState {
	deviceItem: IDevice[]
	isLoading: boolean
	error: string | null
}

const initialState: DeviceState = {
	deviceItem: [],
	isLoading: false,
	error: null,
}

const deviceSlice = createSlice({
	name: 'device',
	initialState,
	reducers: {
		removeDevice(state, action: PayloadAction<string | number>) {
			state.deviceItem = state.deviceItem.filter(item => {
				return item.id !== action.payload
			})
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchDevice.pending, state => {
				state.error = null
				state.isLoading = true
			})
			.addCase(fetchDevice.fulfilled, (state, action) => {
				state.isLoading = false
				state.deviceItem = action.payload
			})
			.addCase(fetchFilterDevice.pending, state => {
				state.error = null
				state.isLoading = true
			})
			.addCase(fetchFilterDevice.fulfilled, (state, action) => {
				state.isLoading = false
				state.deviceItem = action.payload
			})
			.addMatcher(
				(action: AnyAction) => action.type.endsWith('rejected'),
				(state, action: PayloadAction<string>) => {
					state.isLoading = false
					state.error = action.payload
				}
			)
	},
})

export const { removeDevice } = deviceSlice.actions
export default deviceSlice.reducer
