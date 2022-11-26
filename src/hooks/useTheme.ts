import { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'

export const useTheme = (
	initTheme: string
): [theme: string, setTheme: (theme: string) => void] => {
	const [theme, setTheme] = useLocalStorage('theme', initTheme)

	useEffect(() => {
		document.body.dataset.theme = theme
	}, [theme])

	return [theme, setTheme]
}
