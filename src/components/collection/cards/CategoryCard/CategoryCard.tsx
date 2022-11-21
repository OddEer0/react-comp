import React, { FC } from 'react'
import styles from './CategoryCard.module.scss'

interface CategoryCardProps {
	title: string
	icon: string
}

const CategoryCard: FC<CategoryCardProps> = ({ title, icon, ...props }) => {
	const Icon = icon

	return (
		<div {...props} className={styles.card}>
			<Icon />
			<h4>{title}</h4>
		</div>
	)
}

export default CategoryCard
