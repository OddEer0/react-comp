/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import { headerImage } from '../../shared/img'
import List from '../UI/List/List'

interface HeaderProps {}

const Header: FC<HeaderProps> = props => {
	const navListItems = [
		'Акций',
		'Кредит',
		'Оплата и Доставка',
		'Помощь',
		'Скупка Б/У',
		'Контакты',
	]
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
						<List
							items={navListItems}
							renderItem={(item: string, index) => <li key={index}>{item}</li>}
							className={styles.navList}
						/>
						<img className={styles.logoWhite} src={headerImage.Logo2} alt='' />
						<img className={styles.auth} src={headerImage.user} alt='' />
						<img className={styles.phone} src={headerImage.phone} alt='' />
					</div>
				</div>
			</nav>
			<nav className={styles.navbarTwo}>
				<div className='container'>
					<div className={styles.navbarTwoContent}>
						<img className={styles.logo} src={headerImage.Logo} alt='' />
						<Link to='/react-comp/catalog'>
							<button className={styles.greenButton}>
								Каталог товаров
								<img
									className={styles.greenButtonIcon}
									src={headerImage.catalog}
									alt=''
								/>
							</button>
						</Link>
						<div className={styles.searchBlock}>
							<input
								id='search'
								className={styles.searchBlockInput}
								type='text'
								placeholder='Поиск'
							/>
							<label htmlFor='search' className={styles.searchBlockIcon}>
								<img src={headerImage.search} alt='' />
							</label>
						</div>
						<img
							className={styles.searchIcon}
							src={headerImage.searchMobile}
							alt=''
						/>
						<div className={styles.contact}>050 065 87 96</div>
						<div className={styles.iconList}>
							<img alt='' src={headerImage.scales} />
							<img alt='' src={headerImage.heart} />
							<img alt='' src={headerImage.cart} />
						</div>
						<div className={styles.iconListWhite}>
							<img alt='' src={headerImage.cartWhite} />
						</div>
					</div>
				</div>
			</nav>
		</header>
	)
}

export default Header
