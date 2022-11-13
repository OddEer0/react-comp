import React, { FC } from 'react'
import styles from './ErrorFetch.module.scss'

interface ErrorFetchProps {
	error: string | null
	title?: string
}

const ErrorFetch: FC<ErrorFetchProps> = ({ error, title }) => {
	return (
		<div className={styles.errorBlock}>
			<span>&#129402;</span>
			<h1>{error}</h1>
			<p>{title}</p>
		</div>
	)
}

export default ErrorFetch
