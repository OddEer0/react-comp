/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { headerIcons } from '../../../assets/icon/header'
import { TbUserCircle } from 'react-icons/tb'
import { useAppSelector } from '../../../hooks/redux'
import { useToggle } from '../../../hooks/useToggle'
import { navListItems } from '../../../utils/constants/consts'
import AuthModal from '../../collection/modals/AuthModal/AuthModal'
import MenuBurger from '../../collection/menus/MenuBurger/MenuBurger'
import List from '../../shared/List/List'
import styles from './Header.module.scss'
import { BsMoonStars, BsSun } from 'react-icons/bs'
import Container from '../Container/Container'
import { IoIosArrowDown } from 'react-icons/io'
import { useTheme } from '../../../hooks/useTheme'

interface HeaderFirstNavProps {}

const HeaderFirstNav: FC<HeaderFirstNavProps> = props => {
	const [theme, setTheme] = useTheme('dark')
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

	const Logo = headerIcons.Logo2

	return (
		<nav className={styles.navbarOne}>
			<Container>
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
						<Logo className={styles.logoWhite} />
					</Link>
					<div className={styles.rightBlock}>
						{theme === 'light' ? (
							<BsMoonStars
								className={styles.themeIcon}
								onClick={_ => setTheme('dark')}
							/>
						) : (
							<BsSun
								className={styles.themeIcon}
								onClick={_ => setTheme('light')}
							/>
						)}
						{role === 'anonym' ? (
							<TbUserCircle onClick={toggleAuth} className={styles.auth} />
						) : (
							<div className={styles.profile}>
								<Link to='profile'>
									<IoIosArrowDown className={styles.arrow} />
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
			</Container>
			<AuthModal show={showAuthModal} setShow={toggleAuth} />
			<MenuBurger show={showMenuBurger} setShow={toggleMenuBurger} />
		</nav>
	)
}

export default HeaderFirstNav
