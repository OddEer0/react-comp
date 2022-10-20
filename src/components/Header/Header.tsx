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
						<img className={styles.logoWhite} src='img/icon/logo2.png' alt='' />
						<img className={styles.auth} src='img/icon/user.png' alt='' />
						<img className={styles.phone} src='img/icon/phone.png' alt='' />
					</div>
				</div>
			</nav>
			<nav className={styles.navbarTwo}>
				<div className='container'>
					<div className={styles.navbarTwoContent}>
						<img className={styles.logo} src='img/icon/logo.png' alt='' />
						<button className={styles.greenButton}>
							Каталог товаров
							<img
								className={styles.greenButtonIcon}
								src='img/icon/catalog.png'
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
								<img src='img/icon/search.png' alt='' />
							</label>
						</div>
						<img
							className={styles.searchIcon}
							src='img/icon/search-mobile.png'
							alt=''
						/>
						<div className={styles.contact}>050 065 87 96</div>
						<div className={styles.iconList}>
							<img alt='' src='img/icon/scales.png' />
							<img alt='' src='img/icon/heart.png' />
							<img alt='' src='img/icon/cart.png' />
						</div>
						<div className={styles.iconListWhite}>
							<img alt='' src='img/icon/cart-white.png' />
						</div>
					</div>
				</div>
			</nav>
		</header>
	)
}

export default Header
