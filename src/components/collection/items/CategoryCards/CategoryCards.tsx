import { FC } from 'react'
import { Link } from 'react-router-dom'
import { categoryImage } from '../../../../assets/icon/category'
import { useAppSelector } from '../../../../hooks/redux'
import ErrorFetch from '../../../shared/ErrorFetch/ErrorFetch'
import CategorySkeleton from '../../../ui/skeletons/CategorySkeletons'
import CategoryCard from '../../cards/CategoryCard/CategoryCard'
import styles from './CategoryCards.module.scss'

interface CategoryCardsProps {}

const CategoryCards: FC<CategoryCardsProps> = props => {
	const { categoryItem, error, isLoading } = useAppSelector(
		state => state.category
	)
	return (
		<>
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
		</>
	)
}

export default CategoryCards
