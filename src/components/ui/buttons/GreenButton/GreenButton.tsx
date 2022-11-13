import React, { FC } from 'react'
import styles from './GreenButton.module.scss'

interface GreenButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	title: string
	src?: string
}

const GreenButton: FC<GreenButtonProps> = ({ title, src, ...props }) => {
	return (
		<button {...props} className={styles.greenButton}>
			{title}
			{src ? <img src={src} alt='' /> : ''}
		</button>
	)
}

export default GreenButton
