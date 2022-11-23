/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useMemo } from 'react'
import styles from './DeviceCard.module.scss'
import { IDevice } from '../../../../types/IDevice'
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
import { msToDay } from '../../../../utils/helpers/msToDay'
import {
	BsCartCheckFill,
	BsCartPlus,
	BsHeart,
	BsHeartFill,
} from 'react-icons/bs'
import { RiScales3Fill, RiScales3Line } from 'react-icons/ri'

interface DeviceCardProps {
	item: IDevice
	isBasketItem?: boolean
	isFavorite?: boolean
	vertical?: boolean
}

const DeviceCard: FC<DeviceCardProps> = React.memo(
	({ item, isBasketItem = false, isFavorite = false, vertical = false }) => {
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
			<div className={vertical ? styles.cardVertical : styles.card}>
				<div className={styles.header}>
					{msToDay(Date.now()) - msToDay(item.date) < 3 ? (
						<NewPendant className={styles.new}>Новинка</NewPendant>
					) : (
						''
					)}
					{isBasketItem ? (
						<BsCartCheckFill className={styles.basket} onClick={cartHandler} />
					) : (
						<BsCartPlus className={styles.basket} onClick={cartHandler} />
					)}
					{isScales ? (
						<RiScales3Fill className={styles.scales} onClick={scalesHandler} />
					) : (
						<RiScales3Line className={styles.scales} onClick={scalesHandler} />
					)}
					{isFavorite ? (
						<BsHeartFill
							className={styles.heartActive}
							onClick={heartHandler}
						/>
					) : (
						<BsHeart className={styles.heart} onClick={heartHandler} />
					)}
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
