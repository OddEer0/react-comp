import { useRef } from 'react'

export const useCooldownHandler = (callback: () => void, CD: number) => {
	const cooldown = useRef(true)

	const handler = (): void => {
		if (cooldown.current) {
			callback()
			cooldown.current = false
			setTimeout(() => (cooldown.current = true), CD)
		}
	}

	return handler
}
