import React, { FC } from 'react'
import { headerImage } from '../../assets/img'
import { AccordionItem } from '../../utils/consts'
import Accordion from '../Accordion/Accordion'
import Contacts from '../Contacts/Contacts'
import Social from '../Social/Social'
import styles from './MenuBurger.module.scss'

interface MenuBurgerProps {
	show: boolean
	setShow: () => void
}

const MenuBurger: FC<MenuBurgerProps> = ({ show, setShow }) => {
	return (
		<>
			<div className={`${styles.menuBurger} ${show ? styles.menuActive : ''}`}>
				<div className={styles.header}>
					<img src={headerImage.Logo2} alt='' />
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
