import React, { FC } from 'react'
import { headerIcons } from '../../../../assets/icon/header'
import { AccordionItem } from '../../../../utils/constants/consts'
import Accordion from '../../../shared/Accordion/Accordion'
import Contacts from '../../../shared/Contacts/Contacts'
import Social from '../../../shared/Social/Social'
import styles from './MenuBurger.module.scss'

interface MenuBurgerProps {
	show: boolean
	setShow: () => void
}

const MenuBurger: FC<MenuBurgerProps> = ({ show, setShow }) => {
	const Logo = headerIcons.Logo2

	return (
		<>
			<div className={`${styles.menuBurger} ${show ? styles.menuActive : ''}`}>
				<div className={styles.header}>
					<Logo />
					<button onClick={setShow}>&#10006;</button>
				</div>
				<div className={styles.body}>
					<Accordion items={AccordionItem} />
					<Contacts />
					<Social />
				</div>
			</div>
			<div
				onClick={setShow}
				className={`${styles.overlay} ${show ? styles.overlayActive : ''}`}
			></div>
		</>
	)
}

export default MenuBurger
