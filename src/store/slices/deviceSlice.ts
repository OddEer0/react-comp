import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IDevice } from '../../types/IDevice'
import { fetchDevice } from '../actionCreator/deviceAction'

interface DeviceState {
	deviceItem: IDevice[]
	isLoading: boolean
	error: string
}

const initialState: DeviceState = {
	deviceItem: [],
	isLoading: false,
	error: '',
}

const deviceSlice = createSlice({
	name: 'device',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchDevice.pending, state => {
				state.error = ''
				state.isLoading = true
			})
			.addCase(fetchDevice.fulfilled, (state, action) => {
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

export default deviceSlice.reducer
