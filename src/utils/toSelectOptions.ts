interface IOption {
	value: string
	label: string
}

export const toSelectOptions = <T>(
	arr: T[],
	valueKey: string,
	optionsKey: string
) => {
	const options: IOption[] = []
	arr.forEach(item => {
		const obj: IOption = {
			value: (item as any)[valueKey],
			label: (item as any)[optionsKey],
		}
		options.push(obj)
	})
	return options
}
