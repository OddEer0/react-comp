import React, { FC } from 'react'
import styles from './Loading.module.scss'

interface LoadingProps {}

const Loading: FC<LoadingProps> = props => {
	return (
		<div className={styles.preloader}>
			<div className={styles.preloader__row}>
				<div className={styles.preloader__item}></div>
				<div className={styles.preloader__item}></div>
			</div>
		</div>
	)
}

export default Loading
