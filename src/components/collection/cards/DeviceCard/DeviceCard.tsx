/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useMemo } from 'react'
import styles from './DeviceCard.module.scss'
import { IDevice } from '../../../../types/IDevice'
import { headerImage } from '../../../../assets/img'
import GreenButton from '../../../ui/buttons/GreenButton/GreenButton'
import { useAppDispatch } from '../../../../hooks/redux'
import {
	addBasketItem,
	removeBasketItem,
} from '../../../../store/basket/basketSlice'
import { stockNumber } from '../../../../utils/helpers/stockNumber'
import { useToggle } from '../../../../hooks/useToggle'
import { useCooldownHandler } from '../../../../hooks/useCooldownHandler'
import {
	addFavoriteItem,
	removeFavoriteItem,
} from '../../../../store/favorite/favoriteSlice'
import { Link } from 'react-router-dom'
import NewPendant from '../../../ui/pendants/NewPendants/NewPendant'
import List from '../../../shared/List/List'
import { parseArrayInObj } from '../../../../utils/helpers/parseArrayInObj'

interface DeviceCardProps {
	item: IDevice
	isBasketItem?: boolean
	isFavorite?: boolean
}

const DeviceCard: FC<DeviceCardProps> = React.memo(
	({ item, isBasketItem = false, isFavorite = false }) => {
		const dispatch = useAppDispatch()
		const { state: isScales, toggleHandler: scalesHandler } = useToggle()
		const cartHandler = useCooldownHandler(() => {
			if (isBasketItem) dispatch(removeBasketItem(item.id))
			else dispatch(addBasketItem(item))
		}, 300)
		const heartHandler = useCooldownHandler(() => {
			if (isFavorite) dispatch(removeFavoriteItem(item.id))
			else dispatch(addFavoriteItem(item))
		}, 300)

		const info = useMemo(() => {
			return parseArrayInObj(item.info ? item.info : {}, 3)
		}, [])

		return (
			<div className={styles.card}>
				<div className={styles.header}>
					{Date.now() / 1000 / 60 - item.date / 1000 / 60 < 4320 ? (
						<NewPendant className={styles.new}>Новинка</NewPendant>
					) : (
						''
					)}
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
						onClick={heartHandler}
					></button>
				</div>
				<div className={styles.body}>
					<Link to={`/react-comp/catalog/${item.category}/${item.id}`}>
						<img src={item.img} alt='' />
					</Link>
					<Link
						to={`/react-comp/catalog/${item.category}/${item.id}`}
						className={styles.name}
					>
						{item.name}
					</Link>
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
				<div className={styles.footer}>
					{info ? (
						<List
							className={styles.infoList}
							items={info}
							renderItem={(item, index) => (
								<span className={styles.infoTitle} key={index}>
									{item[0]}: {item[1]}
								</span>
							)}
						/>
					) : (
						''
					)}
				</div>
			</div>
		)
	}
)

export default DeviceCard
