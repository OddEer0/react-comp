import React, { FC } from 'react'
import { ISidebarItem } from '../../types/ISidebarMenu'
import styles from './SidebarMenu.module.scss'
import { specialIcon, categoryImage } from '../../shared/img/index'

interface SidebarItemProps {
	item: ISidebarItem
	onClick: (id: number) => void
	className?: string
}

const SidebarItem: FC<SidebarItemProps> = ({ item, onClick, ...props }) => {
	return (
		<div onClick={_ => onClick(item.id)} {...props}>
			<img className={styles.icon} src={categoryImage[item.id - 1]} alt='' />
			<h4>{item.title}</h4>
			<img className={styles.arrow} src={specialIcon.arrow} alt='' />
		</div>
	)
}

export default SidebarItem
