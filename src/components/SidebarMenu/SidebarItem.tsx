import React, { FC } from 'react'
import { ISidebarItem } from '../../types/ISidebarMenu'
import styles from './SidebarMenu.module.scss'

interface SidebarItemProps {
	item: ISidebarItem
	onClick: (id: number) => void
	className?: string
}

const SidebarItem: FC<SidebarItemProps> = ({ item, onClick, ...props }) => {
	return (
		<div onClick={_ => onClick(item.id)} {...props}>
			<img src={item.icon} alt='' />
			<h4>{item.title}</h4>
			<img className={styles.arrow} src='/img/icon/arrow.svg' alt='' />
		</div>
	)
}

export default SidebarItem
