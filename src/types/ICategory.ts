export interface ISubCategory {
	id: number
	title: string
	img: string
}

export interface ICategory {
	id: number
	title: string
	subCategory: ISubCategory[]
}
