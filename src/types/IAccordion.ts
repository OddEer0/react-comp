interface ISubAccordion {
	id: number
	title: string
	to?: string
}

export interface IAccordion {
	id: number
	title: string
	subItem: ISubAccordion[]
}
