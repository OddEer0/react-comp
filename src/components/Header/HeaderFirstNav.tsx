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

	return (
		<nav className={styles.navbarOne}>
			<div className='container'>
				<div className={styles.navbarOneContent}>
					<div
						className={styles.menuBurger}
						onClick={_ => setShowMenuBurger(true)}
					>
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
							onClick={_ => setShowAuthModal(true)}
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
			<AuthModal show={showAuthModal} setShow={setShowAuthModal} />
			<MenuBurger show={showMenuBurger} setShow={setShowMenuBurger} />
		</nav>
	)
}

export default HeaderFirstNav
