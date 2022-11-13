import {
	IOption,
	ISelectCollection,
} from '../../components/collection/modals/AddDeviceModal/AddDevice.interface'

type SelectCollectionType = ISelectCollection | null

export const parseSelectOptions = (
	obj: any
): SelectCollectionType[] | undefined => {
	const selectCollectionArr: SelectCollectionType[] = []

	if (typeof obj === 'object') {
		for (let key in obj) {
			const selectCollection: ISelectCollection = {
				name: key.toString(),
				options: [],
			}

			if (Array.isArray(obj[key])) {
				obj[key].forEach((item: string | number) => {
					const options: IOption = {
						value: item.toString(),
						label: item.toString(),
					}
					selectCollection.options.push(options)
				})
			}

			selectCollectionArr.push(selectCollection)
		}

		return selectCollectionArr
	} else return undefined
}
