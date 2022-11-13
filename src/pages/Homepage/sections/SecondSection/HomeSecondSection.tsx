import React, { FC } from 'react'
import ErrorFetch from '../../../../components/shared/ErrorFetch/ErrorFetch'
import NotItems from '../../../../components/shared/NotItems/NotItems'
import DeviceSkeleton from '../../../../components/ui/skeletons/DeviceSkeleton'
import DeviceCard from '../../../../components/collection/cards/DeviceCard/DeviceCard'
import { useAppSelector } from '../../../../hooks/redux'
import { useFetching } from '../../../../hooks/useFetching'
import { apiService } from '../../../../services/api/api.service'
import { IDevice } from '../../../../types/IDevice'
import styles from './HomeSecondSection.module.scss'

interface HomeSecondSectionProps {}

const HomeSecondSection: FC<HomeSecondSectionProps> = props => {
	const { basketItem } = useAppSelector(state => state.basket)
	const { favoriteItems } = useAppSelector(state => state.favorite)
	const [devices, error, isLoading] = useFetching<IDevice[]>(
		apiService.getNewDevice(10)
	)

	return (
		<section>
			<div className='container'>
				<h1 className={styles.title}>Новинки</h1>
				<div className={styles.content}>
					{error ? (
						<ErrorFetch error={'Что то пошло не так'} />
					) : isLoading ? (
						[...new Array(10)].map((_, index) => <DeviceSkeleton key={index} />)
					) : Array.isArray(devices) ? (
						devices.map(device => (
							<DeviceCard
								key={device.id}
								item={device}
								isBasketItem={basketItem.some(i => i.id === device.id)}
								isFavorite={favoriteItems.some(i => i.id === device.id)}
							/>
						))
					) : (
						<NotItems title='Нет товаров' />
					)}
				</div>
			</div>
		</section>
	)
}

export default HomeSecondSection
