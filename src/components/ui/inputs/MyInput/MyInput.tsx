import React, { FC } from 'react'
import styles from './MyInput.module.scss'

interface MyInputProps extends React.HTMLAttributes<HTMLInputElement> {
	type?: string
	subClass?: string
}

const MyInput: FC<MyInputProps> = ({
	type = 'text',
	subClass = '',
	...props
}) => {
	return (
		<input className={`${styles.input} ${subClass}`} type={type} {...props} />
	)
}

export default MyInput
