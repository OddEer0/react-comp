import React, { FC } from 'react'
import SidebarMenu from '../../../../components/SidebarMenu/SidebarMenu'
import { sidebarItem } from '../../../../mock/SidebarItem'
import styles from './HomeFirstSection.module.scss'

interface HomeFirstSectionProps {}

const HomeFirstSection: FC<HomeFirstSectionProps> = props => {
	return (
		<section className={styles.section}>
			<div className='container'>
				<SidebarMenu items={sidebarItem} />
				<div className={styles.content}></div>
			</div>
		</section>
	)
}

export default HomeFirstSection
