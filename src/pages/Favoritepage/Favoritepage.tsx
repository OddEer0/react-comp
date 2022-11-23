import React, { FC } from 'react'
import NotItems from '../../components/shared/NotItems/NotItems'
import DeviceCard from '../../components/collection/cards/DeviceCard/DeviceCard'
import { useAppSelector } from '../../hooks/redux'
import styles from './FavoritePage.module.scss'
import Container from '../../components/layout/Container/Container'
import Kostyl from '../../components/shared/Kostyl/Kostyl'

interface FavoritePageProps {}

const FavoritePage: FC<FavoritePageProps> = props => {
	const { favoriteItems } = useAppSelector(state => state.favorite)
	const { basketItem } = useAppSelector(state => state.basket)

	return (
		<Container className={styles.container}>
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
			<Kostyl count={4} width={274} />
		</Container>
	)
}

export default FavoritePage
