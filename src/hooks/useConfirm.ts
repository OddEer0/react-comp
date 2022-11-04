import { useState } from 'react'

export const useConfirm = (yesCallback: () => void) => {
	const [state, setState] = useState(false)

	const yesHandler = () => {
		setState(false)
		if (yesCallback) yesCallback()
	}

	const notHandler = () => {
		setState(false)
	}

	return {
		show: state,
		setShow: setState,
		yesHandler,
		notHandler,
	}
}
