import React, { FC } from 'react'
import styles from './CatalogPage.module.scss'
import Container from '../../components/layout/Container/Container'
import CategoryCards from '../../components/collection/items/CategoryCards/CategoryCards'

interface CatalogPageProps {}

const CatalogPage: FC<CatalogPageProps> = props => {
	return (
		<Container>
			<div className={styles.content}>
				<CategoryCards />
			</div>
		</Container>
	)
}

export default CatalogPage
