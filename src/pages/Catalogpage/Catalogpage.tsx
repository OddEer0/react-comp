import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import CategoryCard from '../../components/UI/CategoryCard/CategoryCard'
import styles from './Catalogpage.module.scss'
import { categoryImage } from '../../assets/img/index'
import { useAppSelector } from '../../hooks/redux'

interface CatalogPageProps {}

const CatalogPage: FC<CatalogPageProps> = props => {
	const { categoryItem, error, isLoading } = useAppSelector(
		state => state.category
	)

	return (
		<div className='container'>
			<div className={styles.categoryBlock}>
				{error ? (
					<div className={styles.errorBlock}>
						<span>&#129402;</span>
						<h1>{error}</h1>
						<p>Попробуйте перезагрузить страницу</p>
					</div>
				) : (
					categoryItem.map(item => (
						<Link key={item.id} to={`${item.id}`}>
							<CategoryCard
								category={item.id}
								title={item.title}
								icon={categoryImage[item.id - 1]}
							/>
						</Link>
					))
				)}
			</div>
		</div>
	)
}

export default CatalogPage
