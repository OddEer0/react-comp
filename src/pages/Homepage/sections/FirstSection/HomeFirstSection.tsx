import React, { FC } from 'react'
import SidebarMenu from '../../../../components/collection/menus/SidebarMenu/SidebarMenu'
import SliderImage from '../../../../components/collection/sliders/Sliders/SliderImage'
import Container from '../../../../components/layout/Container/Container'
import { useAppSelector } from '../../../../hooks/redux'
import styles from './HomeFirstSection.module.scss'

interface HomeFirstSectionProps {}

const HomeFirstSection: FC<HomeFirstSectionProps> = props => {
	const { categoryItem, isLoading, error } = useAppSelector(
		state => state.category
	)

	return (
		<section className={styles.section}>
			<Container className={styles.container}>
				<SidebarMenu items={categoryItem} isLoading={isLoading} error={error} />
				<div className={styles.content}>
					<SliderImage />
				</div>
			</Container>
		</section>
	)
}

export default HomeFirstSection
