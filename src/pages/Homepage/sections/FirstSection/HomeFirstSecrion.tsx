import React, { FC } from 'react'
import SidebarMenu from '../../../../components/SidebarMenu/SidebarMenu'
import SliderImage from '../../../../components/Sliders/SliderImage'
import { sidebarItem } from '../../../../mock/SidebarItem'
import styles from './HomeFirstSection.module.scss'

interface HomeFirstSectionProps {}

const HomeFirstSection: FC<HomeFirstSectionProps> = props => {
	return (
		<section className={styles.section}>
			<div className={`container ${styles.container}`}>
				<SidebarMenu items={sidebarItem} />
				<div className={styles.content}>
					<SliderImage />
				</div>
			</div>
		</section>
	)
}

export default HomeFirstSection
