import React, { FC } from 'react'
import styles from './RedButton.module.scss'

interface RedButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode | React.ReactElement
}

const RedButton: FC<RedButtonProps> = ({ children, ...props }) => {
	return (
		<button className={styles.redButton} {...props}>
			{children}
		</button>
	)
}

export default RedButton
