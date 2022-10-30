import React, { FC } from 'react'
import { headerImage, socialImage } from '../../assets/img'
import { AccordionItem, contactsData } from '../../data/menuBurgerData'
import Accordion from '../Accordion/Accordion'
import List from '../UI/List/List'
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
					<div className={styles.contacts}>
						<h2>Контакты</h2>
						<List
							items={contactsData}
							renderItem={(item, index) => <li key={index}>{item}</li>}
						/>
					</div>
					<div className={styles.social}>
						<h2>Следите за нами</h2>
						<div className={styles.socialIcons}>
							{socialImage.map((icon, index) => (
								<img key={index} src={icon} alt='' />
							))}
						</div>
					</div>
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
