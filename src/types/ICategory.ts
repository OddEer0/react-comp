interface PCDevice {
	type: string[]
}

interface Monitor {
	matrix: string[]
	size: string[]
	form: string[]
	diagonal: boolean
	displaySurface: string[]
	updateFrequency: boolean
}

interface Notebook {
	class: string[]
	diagonal: boolean
	displaySize: string[]
	CPU: string[]
	CPUModel: string[]
	CPUGHz: boolean
	RAM: string[]
	memory: boolean
	memoryType: string[]
	energy: boolean
}

export type InfoType = Notebook | Monitor | PCDevice

export interface ISubCategory {
	id: number
	title: string
	img: string
}

export interface ICategory {
	id: number
	title: string
	subCategory: ISubCategory[]
	info: InfoType
}
