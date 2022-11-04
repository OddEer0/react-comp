/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'

export const useFetching = (url: string) => {
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')
	const [data, setData] = useState([])

	useEffect(() => {
		const fetching = async () => {
			try {
				setIsLoading(true)
				const response = await fetch(url)
				const data = await response.json()

				setData(data)
			} catch (e) {
				setError((e as Error).message)
			} finally {
				setIsLoading(false)
			}
		}
		fetching()
	}, [])

	return [data, error, isLoading]
}
