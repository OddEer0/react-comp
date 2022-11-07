import React, { FC } from 'react'

interface CheckboxProps {
	checked?: boolean
}

const Checkbox: FC<CheckboxProps> = ({ checked = false }) => {
	return <input type='checkbox' checked={checked} />
}

export default Checkbox
