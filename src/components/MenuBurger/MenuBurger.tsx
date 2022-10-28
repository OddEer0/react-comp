import React, { FC } from 'react'
import { headerImage } from '../../assets/img'
import styles from './MenuBurger.module.scss'

interface MenuBurgerProps {
	show: boolean
	setShow: (show: boolean) => void
}

const MenuBurger: FC<MenuBurgerProps> = ({ show, setShow }) => {
	return (
		<>
			<div className={`${styles.menuBurger} ${show ? styles.menuActive : ''}`}>
				<div className={styles.header}>
					<img src={headerImage.Logo2} alt='' />
					<button onClick={_ => setShow(false)}>&#10006;</button>
				</div>
			</div>
			<div
				onClick={_ => setShow(false)}
				className={`${styles.overlay} ${show ? styles.overlayActive : ''}`}
			></div>
		</>
	)
}

export default MenuBurger
