import { IOption } from '../../components/collection/modals/AddDeviceModal/AddDevice.interface'

export const filterOptions: IOption[] = [
	{
		label: 'Новые',
		value: 'dateDesc',
	},
	{
		label: 'Старые',
		value: 'dateAsc',
	},
	{
		label: 'Цена по возрастанию',
		value: 'priceAsc',
	},
	{
		label: 'Цена по убыванию',
		value: 'priceDesc',
	},
	{
		label: 'Рейтинг по возрастанию',
		value: 'rateAsc',
	},
	{
		label: 'Рейтинг по убыванию',
		value: 'rateDesc',
	},
]
