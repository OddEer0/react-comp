import React, { FC } from 'react'
import NotItems from '../../components/NotItems/NotItems'
import DeviceCard from '../../components/UI/DeviceCard/DeviceCard'
import { useAppSelector } from '../../hooks/redux'
import styles from './Favoritepage.module.scss'

interface FavoritepageProps {}

const Favoritepage: FC<FavoritepageProps> = props => {
	const { favoriteItems } = useAppSelector(state => state.favorite)

	return (
		<div className='container'>
			{favoriteItems.length ? (
				<>
					{favoriteItems.map(item => (
						<DeviceCard key={item.id} item={item} isBasketItem={false} />
					))}
				</>
			) : (
				<NotItems title='У вас нет фаворитов' />
			)}
		</div>
	)
}

export default Favoritepage
