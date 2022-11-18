export const parseArrayInObj = <T extends object>(
	obj: T,
	count: number,
	start: number = 0
): [string, any][] => {
	const arrFrom = Object.entries(obj)
	const arr = []
	for (let i = 0; i < count; i++) {
		arr.push(arrFrom[start + i])
	}

	return arr
}
