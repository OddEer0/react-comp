/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC } from 'react'
import styles from './Header.module.scss'
import HeaderFirstNav from './HeaderFirstNav'
import HeaderSecondNav from './HeaderSecondNav'

interface HeaderProps {}

const Header: FC<HeaderProps> = props => {
	return (
		<header className={styles.header}>
			<HeaderFirstNav />
			<HeaderSecondNav />
		</header>
	)
}

export default Header
