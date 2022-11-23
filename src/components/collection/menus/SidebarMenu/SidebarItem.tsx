import React, { FC } from 'react'
import styles from './SidebarMenu.module.scss'
import { categoryImage } from '../../../../assets/icon/category'
import { IoIosArrowForward } from 'react-icons/io'
import { ICategory } from '../../../../types/ICategory'

interface SidebarItemProps {
	item: ICategory
	onClick: (id: number) => void
	className?: string
}

const SidebarItem: FC<SidebarItemProps> = ({ item, onClick, ...props }) => {
	const Icon = categoryImage[item.id - 1]

	return (
		<div onClick={_ => onClick(item.id)} {...props}>
			<Icon className={styles.icon} />
			<h4>{item.title}</h4>
			<IoIosArrowForward className={styles.arrow} />
		</div>
	)
}

export default SidebarItem
