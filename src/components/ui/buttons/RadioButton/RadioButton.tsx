import React, { FC } from 'react'
import styles from './RadioButton.module.scss'

interface RadioButtonProps extends React.HTMLAttributes<HTMLInputElement> {
	id: string
	name?: string
}

const RadioButton: FC<RadioButtonProps> = ({ id, name = '', ...props }) => {
	return (
		<div className={styles.radioBlock}>
			<input
				className={styles.input}
				id={id}
				type='radio'
				name={name}
				{...props}
			/>
			<label className={styles.radio} htmlFor={id}>
				<span></span>
			</label>
		</div>
	)
}

export default RadioButton
