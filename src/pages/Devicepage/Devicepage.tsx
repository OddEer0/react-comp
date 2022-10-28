/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DeviceCard from '../../components/UI/DeviceCard/DeviceCard'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchDevice } from '../../store/actionCreator/deviceAction'
import styles from './Devicepage.module.scss'

interface DevicePageProps {}

const DevicePage: FC<DevicePageProps> = props => {
	const { category: categoryID } = useParams()
	const dispatch = useAppDispatch()
	const { deviceItem, error, isLoading } = useAppSelector(state => state.device)

	useEffect(() => {
		dispatch(
			fetchDevice({
				category: Number(categoryID),
			})
		)
	}, [])

	console.log('ds')

	if (isLoading) return <main>loading</main>

	if (error) return <main>error</main>

	return (
		<div className='container'>
			<div className={styles.content}>
				{deviceItem.length
					? deviceItem.map(item => <DeviceCard key={item.id} item={item} />)
					: 'Not Device'}
			</div>
		</div>
	)
}

export default DevicePage
