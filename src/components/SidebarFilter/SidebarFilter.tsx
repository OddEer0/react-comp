/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useReducer } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/redux'
import { fetchFilterDevice } from '../../store/actionCreator/deviceAction'
import RadioButton from '../UI/RadioButton/RadioButton'
import styles from './SidebarFilter.module.scss'
import {
	dateAsc,
	dateDesc,
	priceAsc,
	priceDesc,
	rateAsc,
	rateDesc,
} from './SidebarFilterActions'
import { SidebarFilterReducer } from './SidebarFilterReducer'

interface SidebarFilterProps {}

const SidebarFilter: FC<SidebarFilterProps> = props => {
	const dispatch = useAppDispatch()
	const params = useParams()
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

	return (
		<aside className={styles.sidebar}>
			<h1>Фильтрация по:</h1>
			<div className={styles.filterBlock}>
				<h3>Дате</h3>
				<ul className={styles.filterList}>
					<li>
						<RadioButton
							onChange={() => filterDispatch(dateDesc())}
							id='filterDateNew'
							name='filter'
						/>
						<h5>Новое</h5>
					</li>
					<li>
						<RadioButton
							onChange={() => filterDispatch(dateAsc())}
							id='filterDateOld'
							name='filter'
						/>
						<h5>Старое</h5>
					</li>
				</ul>
			</div>
			<div className={styles.filterBlock}>
				<h3>Цене</h3>
				<ul className={styles.filterList}>
					<li>
						<RadioButton
							onChange={() => filterDispatch(priceAsc())}
							id='filterPriceUp'
							name='filter'
						/>
						<h5>По возрастанию</h5>
					</li>
					<li>
						<RadioButton
							onChange={() => filterDispatch(priceDesc())}
							id='filterPriceLow'
							name='filter'
						/>
						<h5>По убыванию</h5>
					</li>
				</ul>
			</div>
			<div className={styles.filterBlock}>
				<h3>Рейтингу</h3>
				<ul className={styles.filterList}>
					<li>
						<RadioButton
							onChange={() => filterDispatch(rateAsc())}
							id='filterRateUp'
							name='filter'
						/>
						<h5>По возрастанию</h5>
					</li>
					<li>
						<RadioButton
							onChange={() => filterDispatch(rateDesc())}
							id='filterRateLow'
							name='filter'
						/>
						<h5>По убыванию</h5>
					</li>
				</ul>
			</div>
		</aside>
	)
}

export default SidebarFilter
