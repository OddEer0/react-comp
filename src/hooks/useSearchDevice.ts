/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import { useEffect, useState } from 'react'
import { apiService } from '../services/api/api.service'
import { IDevice } from '../types/IDevice'
import { useDebounce } from './useDebounce'
import { useInput } from './useInput'

interface IInput {
	value: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

type Return = [IDevice[], string, boolean, IInput]

export const useSearchDevice = (
	debounceDelay: number = 2000,
	minSymbol: number = 1,
	successCallback: () => void,
	errorCallback: () => void
): Return => {
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')
	const [data, setData] = useState<IDevice[]>([])
	const input = useInput('')

	const fetchData = async () => {
		try {
			setIsLoading(true)
			const response = await axios.get(apiService.getSearchDevice(input.value))
			setData(response.data)
		} catch (e) {
			setError('Что-то пошло не так')
		} finally {
			setIsLoading(false)
		}
	}

	const debounce = useDebounce(() => {
		if (input.value && input.value.length > minSymbol) {
			successCallback()
			fetchData()
		} else {
			errorCallback()
			setData([])
		}
	}, debounceDelay)

	useEffect(() => {
		debounce()
	}, [input.value])

	return [data, error, isLoading, input]
}
