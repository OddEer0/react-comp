export const stockNumber = (num: number, stock: number) => {
	if (stock > 1) {
		return num - num * (stock / 100)
	}
	return num
}
