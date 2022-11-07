/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ErrorFetch from '../../components/ErrorFetch/ErrorFetch'
import NotItems from '../../components/NotItems/NotItems'
import SidebarFilter from '../../components/SidebarFilter/SidebarFilter'
import DeviceSkeleton from '../../components/Skeletons/DeviceSkeleton'
import DeviceCard from '../../components/UI/DeviceCard/DeviceCard'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchDevice } from '../../store/actionCreator/deviceAction'
import styles from './Devicepage.module.scss'

interface DevicePageProps {}

const DevicePage: FC<DevicePageProps> = props => {
	const { category: categoryID } = useParams()
	const dispatch = useAppDispatch()
	const { deviceItem, error, isLoading } = useAppSelector(state => state.device)
	const { basketItem } = useAppSelector(state => state.basket)
	const { favoriteItems } = useAppSelector(state => state.favorite)

	// useEffect(() => {
	// 	dispatch(
	// 		fetchDevice({
	// 			category: Number(categoryID),
	// 		})
	// 	)
	// }, [])

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
