export interface IDeviceOption {
	category: number
}

export interface IFilterDeviceOptions extends IDeviceOption {
	field: string
	page: number
	asc: string
	limit: number
}

type PCDevice = {
	type: string
}

type Monitor = {
	matrix: string
	size: string
	form: string
	diagonal: string
	displaySurface: string
	updateFrequency: string
}

type Notebook = {
	class: string
	diagonal: string
	displaySize: string
	CPU: string
	CPUModel: string
	CPUGHz: string
	RAM: string
	memory: string
	memoryType: string
	energy: string
}

export type AllType =
	| 'energy'
	| 'memory'
	| 'RAM'
	| 'CPUGHz'
	| 'CPUModel'
	| 'CPU'
	| 'displaySize'
	| 'diagonal'
	| 'class'
	| 'type'
	| 'matrix'
	| 'size'
	| 'form'
	| 'diagonal'
	| 'displaySurface'
	| 'updateFrequency'

export type InfoType = Notebook | Monitor | PCDevice

export interface IDevice {
	id: number
	category: number
	name: string
	price: number
	stock: number
	rate: number
	count: number
	date: number
	img: string
	info?: InfoType
}
