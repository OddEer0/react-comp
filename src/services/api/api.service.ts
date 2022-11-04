import axios from 'axios'
import { IDevice } from '../../types/IDevice'

export const apiService = {
	categoryApi: 'https://632feb2ef5fda801f8d8053d.mockapi.io/category',
	deviceApi: 'https://632feb2ef5fda801f8d8053d.mockapi.io/device',
	userApi: 'https://632feb2ef5fda801f8d8053d.mockapi.io/user',
	getCategoryDevice(category: number, limit: number = 20) {
		return `${this.deviceApi}?category=${category}&limit=${limit}`
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
			await axios.post(this.deviceApi, device)
		} catch (e) {
			console.error((e as Error).message)
		} finally {
			isLoadingFN(false)
		}
	},
}
