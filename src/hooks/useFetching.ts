/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'

export const useFetching = <T>(
	url: string
): [T | undefined, string, boolean] => {
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState<string>('')
	const [data, setData] = useState<T>()

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
