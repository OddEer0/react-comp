import { $api } from '../../libs/axios'
import { IDevice } from '../../types/IDevice'

export const apiService = {
	categoryApi: 'https://632feb2ef5fda801f8d8053d.mockapi.io/category',
	deviceApi: 'https://632feb2ef5fda801f8d8053d.mockapi.io/device',
	userApi: 'https://632feb2ef5fda801f8d8053d.mockapi.io/user',
	getCategoryDevice(category: number, limit: number = 20) {
		return `${this.deviceApi}?category=${category}&limit=${limit}&sortBy=date&order=desc`
	},
	getUserEmail(email: string) {
		return `${this.userApi}?email=${email}`
	},
	getDevice(id: number | string) {
		return `${this.deviceApi}?id=${id}`
	},
	async postDevice(device: IDevice, isLoadingFN: (bool: boolean) => void) {
		try {
			isLoadingFN(true)
			// await axios.post(this.deviceApi, device)
			await $api.post('device', device)
		} catch (e) {
			console.error((e as Error).message)
		} finally {
			isLoadingFN(false)
		}
	},
	getFilteredDevice(
		category: number,
		field: string,
		page: number,
		asc: string = 'asc',
		limit: number = 20
	) {
		return `${this.deviceApi}?category=${category}&sortBy=${field}&order=${asc}&limit=${limit}&page=${page}`
	},
	getNewDevice(limit: number = 20) {
		return `${this.deviceApi}?sortBy=date&order=desc&limit=${limit}&page=1`
	},
	getSearchDevice(searchValue: string, limit: number = 25) {
		return `${this.deviceApi}?name=${searchValue}&limit=${limit}&page=1`
	},
	async removeDevice(id: string | number, callback: () => void) {
		try {
			await $api.delete(`device/${id}`)
		} catch (e) {
			console.error((e as Error).message)
		} finally {
			callback()
		}
	},
}
