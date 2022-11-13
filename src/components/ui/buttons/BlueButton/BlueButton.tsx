import React, { FC } from 'react'
import styles from './BlueButton.module.scss'

interface BlueButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode | React.ReactElement
}

const BlueButton: FC<BlueButtonProps> = ({ children, ...props }) => {
	return (
		<button className={styles.blueButton} {...props}>
			{children}
		</button>
	)
}

export default BlueButton
