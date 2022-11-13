/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useReducer } from 'react'
import ErrorFetch from '../../components/shared/ErrorFetch/ErrorFetch'
import NotItems from '../../components/shared/NotItems/NotItems'
import DeviceSkeleton from '../../components/ui/skeletons/DeviceSkeleton'
import DeviceCard from '../../components/collection/cards/DeviceCard/DeviceCard'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import styles from './Devicepage.module.scss'
import Select, { OnChangeValue } from 'react-select'
import { useParams } from 'react-router-dom'
import { SidebarFilterReducer } from './SidebarFilterReducer'
import { fetchFilterDevice } from '../../store/device/deviceAction'
import { IOption } from '../../components/collection/modals/AddDeviceModal/AddDevice.interface'
import { filterOptions } from '../../utils/constants/filterOptions'

interface DevicePageProps {}

const DevicePage: FC<DevicePageProps> = props => {
	const params = useParams()
	const dispatch = useAppDispatch()
	const { deviceItem, error, isLoading } = useAppSelector(state => state.device)
	const { basketItem } = useAppSelector(state => state.basket)
	const { favoriteItems } = useAppSelector(state => state.favorite)

	const [filterState, filterDispatch] = useReducer(SidebarFilterReducer, {
		category: Number(params.category),
		asc: 'desc',
		field: 'date',
		limit: 20,
		page: 1,
	})

	useEffect(() => {
		dispatch(fetchFilterDevice(filterState))
	}, [filterState])

	const selectFilterHandler = (e: OnChangeValue<IOption, boolean>) => {
		filterDispatch({ type: (e as IOption).value })
	}

	if (error) return <ErrorFetch error={error} />

	return (
		<div className={`container ${styles.container}`}>
			<div className={styles.menu}>
				<Select
					defaultValue={filterOptions[0]}
					options={filterOptions}
					onChange={selectFilterHandler}
					className={styles.select}
				/>
			</div>
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
