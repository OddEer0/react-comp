import React, { FC, useState } from 'react'
import styles from './DeviceCard.module.scss'
import { IDevice } from '../../../types/IDevice'
import { headerImage } from '../../../assets/img'
import GreenButton from '../GreenButton/GreenButton'

interface DeviceCardProps {
	item: IDevice
}

const DeviceCard: FC<DeviceCardProps> = ({ item }) => {
	const [isFavorite, setIsFavorite] = useState(false)
	const [isScales, setIsScales] = useState(false)
	const stockPrice = item.price - (item.price / 100) * item.stock
	const favoriteHandler = () => {
		if (isFavorite) {
			setIsFavorite(false)
		} else {
			setIsFavorite(true)
		}
	}

	const scalesHandler = () => {
		if (isScales) {
			setIsScales(false)
		} else {
			setIsScales(true)
		}
	}

	return (
		<div className={styles.card}>
			<div className={styles.header}>
				<img
					onClick={scalesHandler}
					style={{ background: isScales ? 'rgba(24, 0, 240, 0.545)' : '' }}
					src={headerImage.scales}
					alt=''
				/>
				<button
					onClick={favoriteHandler}
					style={{ color: isFavorite ? 'red' : '' }}
				>
					&#10084;
				</button>
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
								<h4 className={styles.stock}>{stockPrice}</h4>
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

export default DeviceCard
