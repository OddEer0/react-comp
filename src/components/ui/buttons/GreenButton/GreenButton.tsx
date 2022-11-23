import React, { FC } from 'react'
import styles from './GreenButton.module.scss'

interface GreenButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	title: string
	src?: string
	icon?: any
}

const GreenButton: FC<GreenButtonProps> = ({ title, src, icon, ...props }) => {
	const Icon = icon

	return (
		<button {...props} className={styles.greenButton}>
			{title}
			{src ? <img src={src} alt='' /> : ''}
			{icon ? <Icon className={styles.icon} /> : ''}
		</button>
	)
}

export default GreenButton
