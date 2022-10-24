/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchDevice } from '../../store/actionCreator/deviceAction'

interface DevicePageProps {}

const DevicePage: FC<DevicePageProps> = props => {
	const { category: categoryID } = useParams()
	const dispatch = useAppDispatch()
	const { deviceItem, error, isLoading } = useAppSelector(state => state.device)

	useEffect(() => {
		dispatch(fetchDevice({ category: Number(categoryID) }))
	}, [])

	console.log('ds')

	if (isLoading) return <main>loading</main>

	if (error) return <main>error</main>

	return (
		<div className='container'>
			{deviceItem.length
				? deviceItem.map(item => <h1 key={item.id}>{item.name}</h1>)
				: 'Not Device'}
		</div>
	)
}

export default DevicePage
