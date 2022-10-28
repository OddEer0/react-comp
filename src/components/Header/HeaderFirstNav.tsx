import React, { FC, useState } from 'react'
import { headerImage } from '../../assets/img'
import { useAppSelector } from '../../hooks/redux'
import AuthModal from '../AuthModal/AuthModal'
import MenuBurger from '../MenuBurger/MenuBurger'
import List from '../UI/List/List'
import styles from './Header.module.scss'

interface HeaderFirstNavProps {}

const HeaderFirstNav: FC<HeaderFirstNavProps> = props => {
	const [showAuthModal, setShowAuthModal] = useState(false)
	const [showMenuBurger, setShowMenuBurger] = useState(false)
	const { role, img, name } = useAppSelector(state => state.user)
	const navListItems = [
		'Акций',
		'Кредит',
		'Оплата и Доставка',
		'Помощь',
		'Скупка Б/У',
		'Контакты',
	]

	const toggleAuth = () => {
		if (showAuthModal) {
			setShowAuthModal(false)
			document.body.classList.remove('no-scroll-1')
		} else {
			setShowAuthModal(true)
			document.body.classList.add('no-scroll-1')
		}
	}

	const toggleMenuBurger = () => {
		if (showMenuBurger) {
			setShowMenuBurger(false)
			document.body.classList.remove('no-scroll-1')
		} else {
			setShowMenuBurger(true)
			document.body.classList.add('no-scroll-1')
		}
	}

	return (
		<nav className={styles.navbarOne}>
			<div className='container'>
				<div className={styles.navbarOneContent}>
					<div className={styles.menuBurger} onClick={toggleMenuBurger}>
						<span></span>
					</div>
					<List
						items={navListItems}
						renderItem={(item: string, index) => <li key={index}>{item}</li>}
						className={styles.navList}
					/>
					<img className={styles.logoWhite} src={headerImage.Logo2} alt='' />
					{role === 'anonym' ? (
						<img
							onClick={toggleAuth}
							className={styles.auth}
							src={headerImage.user}
							alt=''
						/>
					) : (
						<img
							title={name ? name : ''}
							className={styles.userAvatar}
							src={img ? img : ''}
							alt=''
						/>
					)}
					<img className={styles.phone} src={headerImage.phone} alt='' />
				</div>
			</div>
			<AuthModal show={showAuthModal} setShow={toggleAuth} />
			<MenuBurger show={showMenuBurger} setShow={toggleMenuBurger} />
		</nav>
	)
}

export default HeaderFirstNav
