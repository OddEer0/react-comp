import React, { FC } from 'react'
import styles from './DeviceCard.module.scss'
import { IDevice } from '../../../types/IDevice'
import { headerImage } from '../../../assets/img'
import GreenButton from '../GreenButton/GreenButton'
import { useAppDispatch } from '../../../hooks/redux'
import {
	addBasketItem,
	removeBasketItem,
} from '../../../store/slices/basketSlice'
import { stockNumber } from '../../../utils/stockNumber'
import { useToggle } from '../../../hooks/useToggle'
import { useCooldownHandler } from '../../../hooks/useCooldownHandler'

interface DeviceCardProps {
	item: IDevice
	isBasketItem: boolean
}

const DeviceCard: FC<DeviceCardProps> = React.memo(
	({ item, isBasketItem = false }) => {
		const dispatch = useAppDispatch()
		const { state: isFavorite, toggleHandler: favoriteHandler } = useToggle()
		const { state: isScales, toggleHandler: scalesHandler } = useToggle()
		const cartHandler = useCooldownHandler(() => {
			if (isBasketItem) dispatch(removeBasketItem(item.id))
			else dispatch(addBasketItem(item))
		}, 300)

		return (
			<div className={styles.card}>
				<div className={styles.header}>
					<img
						onClick={cartHandler}
						style={{
							background: isBasketItem ? 'rgba(24, 0, 240, 0.545)' : '',
						}}
						src={headerImage.cart}
						alt=''
					/>
					<img
						onClick={scalesHandler}
						style={{ background: isScales ? 'rgba(24, 0, 240, 0.545)' : '' }}
						src={headerImage.scales}
						alt=''
					/>
					<button
						className={
							isFavorite
								? [styles.heart, styles.heartActive].join(' ')
								: styles.heart
						}
						onClick={_ => favoriteHandler()}
					></button>
				</div>
				<div className={styles.body}>
					<img src={item.img} alt='' />
					<h2>{item.name}</h2>
					<div className={styles.rate}>
						<span>&#9733;</span>
						<span>&#9733;</span>
						<span>&#9733;</span>
						<span>&#9733;</span>
						<span>&#9733;</span>
					</div>
					<div className={styles.saleBlock}>
						<div className={styles.price}>
							{item.stock ? (
								<>
									<h4 className={styles.unStock}>{item.price}</h4>
									<h4 className={styles.stock}>
										{stockNumber(item.price, item.stock)}
									</h4>
								</>
							) : (
								<h4>{item.price}</h4>
							)}
						</div>
						<GreenButton title='Купить' />
					</div>
				</div>
			</div>
		)
	}
)

export default DeviceCard
