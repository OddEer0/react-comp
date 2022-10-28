import React, { FC } from 'react'
import styles from './Catalogpage.module.scss'
import { useAppSelector } from '../../hooks/redux'
import CategoryCard from '../../components/UI/CategoryCard/CategoryCard'
import { categoryImage } from '../../assets/img'
import { Link } from 'react-router-dom'
import ErrorFetch from '../../components/ErrorFetch/ErrorFetch'
import CategorySkeleton from '../../components/Skeletons/CategorySkeletons'

interface CatalogPageProps {}

const CatalogPage: FC<CatalogPageProps> = props => {
	const { categoryItem, error, isLoading } = useAppSelector(
		state => state.category
	)

	return (
		<div className='container'>
			<div className={styles.categoryBlock}>
				{isLoading ? (
					[...new Array(12)].map((_, index) => (
						<CategorySkeleton key={index} className={styles.categorySkeleton} />
					))
				) : error ? (
					<ErrorFetch error={error} title='Попробуйте перезагрузить страницу' />
				) : (
					<>
						{categoryItem.map(item => (
							<Link key={item.id} to={`${item.id}`}>
								<CategoryCard
									icon={categoryImage[item.id - 1]}
									title={item.title}
								/>
							</Link>
						))}
					</>
				)}
			</div>
		</div>
	)
}

export default CatalogPage
