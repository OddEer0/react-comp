import React, { FC } from 'react'
import { IDevice } from '../../../../types/IDevice'
import styles from './SidebarMenu.module.scss'

interface SidebarContentItemProps {
	item: IDevice
}

const SidebarContentItem: FC<SidebarContentItemProps> = ({ item }) => {
	const stockPrice = item.price - (item.price / 100) * item.stock

	return (
		<div className={styles.contentItem}>
			<img src={item.img} alt='' />
			<h2>{item.name}</h2>
			<div className={styles.price}>
				{item.stock ? (
					<>
						<h4 className={styles.unStock}>{item.price}</h4>
						<h4 className={styles.stock}>{stockPrice}</h4>
					</>
				) : (
					<h4>{item.price}</h4>
				)}
			</div>
		</div>
	)
}

export default SidebarContentItem
