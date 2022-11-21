import React, { FC } from 'react'
import NotItems from '../../components/shared/NotItems/NotItems'
import DeviceCard from '../../components/collection/cards/DeviceCard/DeviceCard'
import { useAppSelector } from '../../hooks/redux'
import styles from './FavoritePage.module.scss'

interface FavoritePageProps {}

const FavoritePage: FC<FavoritePageProps> = props => {
	const { favoriteItems } = useAppSelector(state => state.favorite)
	const { basketItem } = useAppSelector(state => state.basket)

	return (
		<div className={['container', styles.container].join(' ')}>
			{favoriteItems.length ? (
				<>
					{favoriteItems.map(item => (
						<DeviceCard
							key={item.id}
							item={item}
							isBasketItem={basketItem.some(i => i.id === item.id)}
							isFavorite={favoriteItems.some(i => i.id === item.id)}
						/>
					))}
				</>
			) : (
				<NotItems title='У вас нет фаворитов' />
			)}
		</div>
	)
}

export default FavoritePage
