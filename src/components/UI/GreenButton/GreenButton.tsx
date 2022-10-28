import React, { FC } from 'react'
import styles from './GreenButton.module.scss'

interface GreenButtonProps {
	title: string
	src?: string
}

const GreenButton: FC<GreenButtonProps> = ({ title, src }) => {
	return (
		<button className={styles.greenButton}>
			{title}
			{src ? <img src={src} alt='' /> : ''}
		</button>
	)
}

export default GreenButton
