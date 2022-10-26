import React, { FC, useState } from 'react'
import { headerImage } from '../../assets/img'
import { useAppSelector } from '../../hooks/redux'
import AuthModal from '../AuthModal/AuthModal'
import List from '../UI/List/List'
import styles from './Header.module.scss'

interface HeaderFirstNavProps {}

const HeaderFirstNav: FC<HeaderFirstNavProps> = props => {
	const [showAuthModal, setShowAuthModal] = useState(false)
	const { role } = useAppSelector(state => state.user)
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
					<div className={styles.menuBurger}>
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
						<h1>Register</h1>
					)}
					<img className={styles.phone} src={headerImage.phone} alt='' />
				</div>
			</div>
			<AuthModal show={showAuthModal} setShow={setShowAuthModal} />
		</nav>
	)
}

export default HeaderFirstNav
