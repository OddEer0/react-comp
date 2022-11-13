import React, { FC } from 'react'
import styles from './SidebarMenu.module.scss'
import { specialIcon, categoryImage } from '../../../../assets/img/index'
import { ICategory } from '../../../../types/ICategory'

interface SidebarItemProps {
	item: ICategory
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
