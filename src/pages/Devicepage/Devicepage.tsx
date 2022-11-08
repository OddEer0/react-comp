/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC } from 'react'
import ErrorFetch from '../../components/ErrorFetch/ErrorFetch'
import NotItems from '../../components/NotItems/NotItems'
import SidebarFilter from '../../components/SidebarFilter/SidebarFilter'
import DeviceSkeleton from '../../components/Skeletons/DeviceSkeleton'
import DeviceCard from '../../components/UI/DeviceCard/DeviceCard'
import { useAppSelector } from '../../hooks/redux'
import styles from './Devicepage.module.scss'

interface DevicePageProps {}

const DevicePage: FC<DevicePageProps> = props => {
	const { deviceItem, error, isLoading } = useAppSelector(state => state.device)
	const { basketItem } = useAppSelector(state => state.basket)
	const { favoriteItems } = useAppSelector(state => state.favorite)

	if (error) return <ErrorFetch error={error} />

	return (
		<div className={`container ${styles.container}`}>
			<SidebarFilter />
			<div className={styles.content}>
				{isLoading ? (
					[...new Array(20)].map((_, index) => <DeviceSkeleton key={index} />)
				) : deviceItem.length ? (
					deviceItem.map(item => (
						<DeviceCard
							key={item.id}
							item={item}
							isBasketItem={basketItem.some(i => i.id === item.id)}
							isFavorite={favoriteItems.some(i => i.id === item.id)}
						/>
					))
				) : (
					<NotItems title='Товаров больше не осталось' />
				)}
			</div>
		</div>
	)
}

export default DevicePage
