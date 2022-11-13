import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { headerImage } from '../../../../assets/img'
import GreenButton from '../../../../components/ui/buttons/GreenButton/GreenButton'
import RedButton from '../../../../components/ui/buttons/RedButton/RedButton'
import InStockPendant from '../../../../components/ui/pendants/InStockPendant/InStockPendant'
import NewPendant from '../../../../components/ui/pendants/NewPendants/NewPendant'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import { useCooldownHandler } from '../../../../hooks/useCooldownHandler'
import { apiService } from '../../../../services/api/api.service'
import {
	addBasketItem,
	removeBasketItem,
} from '../../../../store/basket/basketSlice'
import { removeDevice } from '../../../../store/device/deviceSlice'
import {
	addFavoriteItem,
	removeFavoriteItem,
} from '../../../../store/favorite/favoriteSlice'
import { IDevice } from '../../../../types/IDevice'
import styles from './FirstSection.module.scss'

interface FirstSectionProps {
	item: IDevice
}

const FirstSection: FC<FirstSectionProps> = ({ item }) => {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const { basketItem } = useAppSelector(state => state.basket)
	const { favoriteItems } = useAppSelector(state => state.favorite)
	const { role } = useAppSelector(state => state.user)

	const isFavorite = favoriteItems.some(i => i.id === item.id)
	const isBasketItem = basketItem.some(i => i.id === item.id)

	const basketHandler = useCooldownHandler(() => {
		if (isBasketItem) dispatch(removeBasketItem(item.id))
		else dispatch(addBasketItem(item))
	}, 300)

	const favoriteHandler = useCooldownHandler(() => {
		if (isFavorite) dispatch(removeFavoriteItem(item.id))
		else dispatch(addFavoriteItem(item))
	}, 300)

	const removeHandler = () => {
		apiService.removeDevice(item.id, () => {
			dispatch(removeDevice(`${item.id}`))
			navigate(-1)
		})
	}
	return (
		<section>
			<div className={['container', styles.section].join(' ')}>
				<img className={styles.deviceImg} src={item.img} alt='' />
				<div className={styles.block}>
					<div className={styles.headBlock}>
						<div className={styles.isPendants}>
							<InStockPendant className={styles.pendant}>
								В наличий
							</InStockPendant>
							{Date.now() / 1000 / 60 - item.date / 1000 / 60 < 4320 ? (
								<NewPendant className={styles.pendant}>Новинка</NewPendant>
							) : (
								''
							)}
						</div>
						<div className={styles.icons}>
							<img
								onClick={favoriteHandler}
								className={isFavorite ? styles.activeFavorite : ''}
								src={headerImage.heart}
								alt=''
							/>
							<img
								onClick={basketHandler}
								className={isBasketItem ? styles.activeBasket : ''}
								src={headerImage.cart}
								alt=''
							/>
						</div>
					</div>
					<h1>{item.name}</h1>
					<div className={styles.priceAndButtons}>
						<h3>{item.price} руб</h3>
						<GreenButton title='Купить' />
						{(role === 'admin' || role === 'employee') && (
							<RedButton onClick={removeHandler}>Удалить</RedButton>
						)}
					</div>
				</div>
			</div>
		</section>
	)
}

export default FirstSection
