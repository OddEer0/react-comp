export interface IDeviceOption {
	category: number
}

export interface IDevice {
	id: number
	category: number
	subCategory: number
	name: string
	price: number
	stock: number
	rate: number
	count: number
	img: string
}