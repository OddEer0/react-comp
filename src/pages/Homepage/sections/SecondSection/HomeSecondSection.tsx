import React, { FC } from 'react'
import ErrorFetch from '../../../../components/ErrorFetch/ErrorFetch'
import NotItems from '../../../../components/NotItems/NotItems'
import DeviceSkeleton from '../../../../components/Skeletons/DeviceSkeleton'
import DeviceCard from '../../../../components/UI/DeviceCard/DeviceCard'
import { useFetching } from '../../../../hooks/useFetching'
import { apiService } from '../../../../services/api/api.service'
import { IDevice } from '../../../../types/IDevice'
import styles from './HomeSecondSection.module.scss'

interface HomeSecondSectionProps {}

const HomeSecondSection: FC<HomeSecondSectionProps> = props => {
	const [devices, error, isLoading] = useFetching<IDevice[]>(
		apiService.getNewDevice(10)
	)

	console.log(apiService.getNewDevice(10))

	return (
		<section>
			<div className='container'>
				<h1 className={styles.title}>Новинки</h1>
				<div className={styles.content}>
					{error ? (
						<ErrorFetch error={'Что то пошло не так'} />
					) : isLoading ? (
						[...new Array(10)].map((device, index) => (
							<DeviceSkeleton key={index} />
						))
					) : Array.isArray(devices) ? (
						devices.map(device => <DeviceCard key={device.id} item={device} />)
					) : (
						<NotItems title='Нет товаров' />
					)}
				</div>
			</div>
		</section>
	)
}

export default HomeSecondSection
