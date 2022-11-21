import { IFilterDeviceOptions } from '../../types/IDevice'

export const SidebarFilterReducer = (
	state: IFilterDeviceOptions,
	action: any
): IFilterDeviceOptions => {
	switch (action.type) {
		case 'dateDesc':
			return { ...state, field: 'date', asc: 'desc' }
		case 'dateAsc':
			return { ...state, field: 'date', asc: 'asc' }
		case 'priceAsc':
			return { ...state, field: 'price', asc: 'asc' }
		case 'priceDesc':
			return { ...state, field: 'price', asc: 'desc' }
		case 'rateAsc':
			return { ...state, field: 'rate', asc: 'asc' }
		case 'rateDesc':
			return { ...state, field: 'rate', asc: 'desc' }
		default:
			return state
	}
}
