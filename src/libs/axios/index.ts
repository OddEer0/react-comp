import axios from 'axios'

export const $api = axios.create({
	baseURL: 'https://632feb2ef5fda801f8d8053d.mockapi.io/',
	withCredentials: false,
})
