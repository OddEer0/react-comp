import React, { FC } from 'react'
import styles from './CategoryCard.module.scss'

interface CategoryCardProps {
	title: string
	icon: string
	category: number
}

const CategoryCard: FC<CategoryCardProps> = ({
	category,
	title,
	icon,
	...props
}) => {
	return (
		<div {...props} className={styles.card}>
			<img src={icon} alt='' />
			<h4>{title}</h4>
		</div>
	)
}

export default CategoryCard
