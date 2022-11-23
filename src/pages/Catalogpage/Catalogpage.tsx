import React, { FC } from 'react'
import styles from './CatalogPage.module.scss'
import Container from '../../components/layout/Container/Container'
import CategoryCards from '../../components/collection/items/CategoryCards/CategoryCards'
import EmptyCards from '../../components/shared/Kostyl/Kostyl'

interface CatalogPageProps {}

const CatalogPage: FC<CatalogPageProps> = props => {
	return (
		<Container>
			<div className={styles.content}>
				<CategoryCards />
				<EmptyCards count={1} width={350} />
			</div>
		</Container>
	)
}

export default CatalogPage
