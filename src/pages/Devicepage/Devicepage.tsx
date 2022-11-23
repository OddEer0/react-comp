/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useReducer, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import styles from './DevicePage.module.scss'
import Select, { OnChangeValue } from 'react-select'
import { useParams } from 'react-router-dom'
import { SidebarFilterReducer } from './FilterReducer'
import { fetchFilterDevice } from '../../store/device/deviceAction'
import { IOption } from '../../components/collection/modals/AddDeviceModal/AddDevice.interface'
import { filterOptions } from '../../utils/constants/filterOptions'
import DeviceCards from '../../components/collection/items/DeviceCards/DeviceCards'
import Container from '../../components/layout/Container/Container'
import EmptyCards from '../../components/shared/Kostyl/Kostyl'
import SelectCardPosition from '../../components/collection/cards/DeviceCard/SelectCardPosition/SelectCardPosition'

interface DevicePageProps {}

const DevicePage: FC<DevicePageProps> = props => {
	const [isCardVertical, setIsCardVertical] = useState(false)
	const params = useParams()
	const dispatch = useAppDispatch()
	const { deviceItem, error, isLoading } = useAppSelector(state => state.device)

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

	return (
		<Container className={styles.container}>
			<div className={styles.menu}>
				<div className={styles.firstBlock}></div>
				<div className={styles.secondBlock}>
					<Select
						defaultValue={filterOptions[0]}
						options={filterOptions}
						onChange={selectFilterHandler}
						className={styles.select}
						classNamePrefix='device-page-select'
					/>
					<SelectCardPosition
						className={styles.cardPosition}
						vertical={isCardVertical}
						setVertical={setIsCardVertical}
					/>
				</div>
			</div>
			<div className={isCardVertical ? styles.verticalContent : styles.content}>
				<DeviceCards
					vertical={isCardVertical}
					devices={deviceItem}
					error={error}
					isLoading={isLoading}
				/>
				<EmptyCards count={4} width={274} />
			</div>
		</Container>
	)
}

export default DevicePage
