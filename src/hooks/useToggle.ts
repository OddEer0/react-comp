import { useRef, useState } from 'react'

export const useToggle = (
	init: boolean = false,
	firstCallback: () => void = () => {},
	secondCallback: () => void = () => {},
	coolDown: number = 0
) => {
	const [state, setState] = useState(init)
	const cd = useRef(true)

	const toggleHandler = () => {
		if (cd.current) {
			if (state) {
				setState(false)
				secondCallback()
			} else {
				setState(true)
				firstCallback()
			}
			cd.current = false
			setTimeout(() => (cd.current = true), coolDown)
		}
	}

	return { state, toggleHandler }
}
