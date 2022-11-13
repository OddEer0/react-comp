import React, { FC } from 'react'
import styles from './NotItems.module.scss'

interface NotItemsProps {
	title: string
}

const NotItems: FC<NotItemsProps> = ({ title }) => {
	return (
		<div className={styles.errorBlock}>
			<span>&#x1f622;</span>
			<p>{title}</p>
		</div>
	)
}

export default NotItems
