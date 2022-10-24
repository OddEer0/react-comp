import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import CategoryCard from '../../components/UI/CategoryCard/CategoryCard'
import { sidebarItem } from '../../mock/SidebarItem'
import styles from './Catalogpage.module.scss'

interface CatalogPageProps {}

const CatalogPage: FC<CatalogPageProps> = props => {
	return (
		<div className='container'>
			<div className={styles.categoryBlock}>
				{sidebarItem.map(item => (
					<Link key={item.id} to={`${item.id}`}>
						<CategoryCard
							category={item.id}
							title={item.title}
							icon={item.icon}
						/>
					</Link>
				))}
			</div>
		</div>
	)
}

export default CatalogPage
