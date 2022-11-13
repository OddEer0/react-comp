import React, { FC } from 'react'
import styles from './BlueNeonButton.module.scss'

interface BlueNeonButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode | React.ReactElement
}

const BlueNeonButton: FC<BlueNeonButtonProps> = ({ children, ...props }) => {
	return (
		<button className={styles.button} {...props}>
			{children}
		</button>
	)
}

export default BlueNeonButton
