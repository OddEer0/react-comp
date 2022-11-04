import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { headerImage, specialIcon } from '../../assets/img'
import { useAppSelector } from '../../hooks/redux'
import { useToggle } from '../../hooks/useToggle'
import { navListItems } from '../../utils/consts'
import AuthModal from '../AuthModal/AuthModal'
import MenuBurger from '../MenuBurger/MenuBurger'
import List from '../UI/List/List'
import styles from './Header.module.scss'

interface HeaderFirstNavProps {}

const HeaderFirstNav: FC<HeaderFirstNavProps> = props => {
	const { role, img, name } = useAppSelector(state => state.user)
	const { state: showAuthModal, toggleHandler: toggleAuth } = useToggle(
		false,
		400,
		() => document.body.classList.add('no-scroll-1'),
		() => document.body.classList.remove('no-scroll-1')
	)
	const { state: showMenuBurger, toggleHandler: toggleMenuBurger } = useToggle(
		false,
		400,
		() => document.body.classList.add('no-scroll-1'),
		() => document.body.classList.remove('no-scroll-1')
	)

	return (
		<nav className={styles.navbarOne}>
			<div className='container'>
				<div className={styles.navbarOneContent}>
					<div className={styles.burgerAndList}>
						<div className={styles.menuBurger} onClick={toggleMenuBurger}>
							<span></span>
						</div>
						<List
							items={navListItems}
							renderItem={(item: string, index) => <li key={index}>{item}</li>}
							className={styles.navList}
						/>
					</div>
					<Link to='/react-comp'>
						<img className={styles.logoWhite} src={headerImage.Logo2} alt='' />
					</Link>
					{role === 'anonym' ? (
						<img
							onClick={toggleAuth}
							className={styles.auth}
							src={headerImage.user}
							alt=''
						/>
					) : (
						<div className={styles.profile}>
							<Link to='profile'>
								<img
									className={styles.arrow}
									src={specialIcon.arrowWhite}
									alt=''
								/>
								<img
									title={name ? name : ''}
									className={styles.userAvatar}
									src={img ? img : ''}
									alt=''
								/>
							</Link>
						</div>
					)}
				</div>
			</div>
			<AuthModal show={showAuthModal} setShow={toggleAuth} />
			<MenuBurger show={showMenuBurger} setShow={toggleMenuBurger} />
		</nav>
	)
}

export default HeaderFirstNav
