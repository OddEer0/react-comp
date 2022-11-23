import { FC } from 'react'
import { useAppSelector } from '../../../../hooks/redux'
import { IDevice } from '../../../../types/IDevice'
import ErrorFetch from '../../../shared/ErrorFetch/ErrorFetch'
import NotItems from '../../../shared/NotItems/NotItems'
import DeviceSkeleton from '../../../ui/skeletons/DeviceSkeleton'
import DeviceCard from '../../cards/DeviceCard/DeviceCard'

interface DeviceCardsProps {
	devices: IDevice[]
	error: string | null
	isLoading: boolean
	notItemTitle?: string
	skeletonCount?: number
	vertical?: boolean
}

const DeviceCards: FC<DeviceCardsProps> = ({
	devices,
	error,
	isLoading,
	notItemTitle = 'Нет товаров',
	skeletonCount = 10,
	vertical = false,
}) => {
	const { basketItem } = useAppSelector(state => state.basket)
	const { favoriteItems } = useAppSelector(state => state.favorite)
	return (
		<>
			{error ? (
				<ErrorFetch error={'Что то пошло не так'} />
			) : isLoading ? (
				[...new Array(skeletonCount)].map((_, index) => (
					<DeviceSkeleton key={index} />
				))
			) : Array.isArray(devices) ? (
				devices.map(device => (
					<DeviceCard
						key={device.id}
						item={device}
						vertical={vertical}
						isBasketItem={basketItem.some(i => i.id === device.id)}
						isFavorite={favoriteItems.some(i => i.id === device.id)}
					/>
				))
			) : (
				<NotItems title={notItemTitle} />
			)}
		</>
	)
}

export default DeviceCards
