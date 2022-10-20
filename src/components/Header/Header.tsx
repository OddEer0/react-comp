/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useCallback, useEffect, useState } from 'react'
import styles from './Header.module.scss'

interface HeaderProps {}

const Header: FC<HeaderProps> = props => {
	const [width, setWidth] = useState(window.innerWidth)

	const resizeHandler = useCallback((e: Event) => {
		const w = e.target as Window
		setWidth(w.innerWidth)
	}, [])

	useEffect(() => {
		window.addEventListener('resize', resizeHandler)

		return () => {
			window.removeEventListener('resize', resizeHandler)
		}
	}, [])

	return (
		<header className={styles.header}>
			<nav className={styles.navbarOne}>
				<div className='container'>
					<div className={styles.navbarOneContent}>
						<div className={styles.menuBurger}>
							<span></span>
						</div>
						<ul className={styles.navList}>
							<li>Акций</li>
							<li>Кредит</li>
							<li>Оплата и Доставка</li>
							<li>Помощь</li>
							<li>Скупка Б/У</li>
							<li>Контакты</li>
						</ul>
						<img
							className={styles.logoWhite}
							src='/img/icon/header/logo2.svg'
							alt=''
						/>
						<img
							className={styles.auth}
							src='/img/icon/header/user.svg'
							alt=''
						/>
						<img
							className={styles.phone}
							src='/img/icon/header/phone.svg'
							alt=''
						/>
					</div>
				</div>
			</nav>
			<nav className={styles.navbarTwo}>
				<div className='container'>
					<div className={styles.navbarTwoContent}>
						<img
							className={styles.logo}
							src='/img/icon/header/logo.svg'
							alt=''
						/>
						<button className={styles.greenButton}>
							Каталог товаров
							<img
								className={styles.greenButtonIcon}
								src='/img/icon/header/catalog.svg'
								alt=''
							/>
						</button>
						<div className={styles.searchBlock}>
							<input
								id='search'
								className={styles.searchBlockInput}
								type='text'
								placeholder='Поиск'
							/>
							<label htmlFor='search' className={styles.searchBlockIcon}>
								<img src='/img/icon/header/search.svg' alt='' />
							</label>
						</div>
						<img
							className={styles.searchIcon}
							src='/img/icon/header/search-mobile.svg'
							alt=''
						/>
						<div className={styles.contact}>050 065 87 96</div>
						<div className={styles.iconList}>
							<img alt='' src='/img/icon/header/scales.svg' />
							<img alt='' src='/img/icon/header/heart.svg' />
							<img alt='' src='/img/icon/header/cart.svg' />
						</div>
						<div className={styles.iconListWhite}>
							<img alt='' src='/img/icon/header/cart-white.svg' />
						</div>
					</div>
				</div>
			</nav>
		</header>
	)
}

export default Header
