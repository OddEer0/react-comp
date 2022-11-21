/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useState } from 'react'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { useAppDispatch } from '../../../../hooks/redux'
import { removeBasketItem } from '../../../../store/basket/basketSlice'
import { IDevice } from '../../../../types/IDevice'
import { stockNumber } from '../../../../utils/helpers/stockNumber'
import styles from './BasketModal.module.scss'

interface BasketItemProps extends React.HTMLAttributes<HTMLDivElement> {
	item: IDevice
	setTotalPrice: (prev: (p: number) => number) => void
}

const BasketItem: FC<BasketItemProps> = ({ item, setTotalPrice, ...props }) => {
	const [count, setCount] = useState(1)
	const [price, setPrice] = useState<number>(
		stockNumber(item.price, item.stock)
	)
	const dispatch = useAppDispatch()

	useEffect(() => {
		setTotalPrice(prev => prev + price)
	}, [])

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = Number(e.target.value)
		if (typeof value === 'number' && !isNaN(value)) {
			setCount(value)
		}
	}

	const removeHandler = (id: number) => {
		dispatch(removeBasketItem(id))
		setTotalPrice(prev => prev - price)
	}

	const plusHandler = () => {
		if (count >= 0) {
			setCount(prev => prev + 1)
		}
	}

	const minusHandler = () => {
		if (count > 1) {
			setCount(prev => prev - 1)
		}
	}

	useEffect(() => {
		const prevPrice = price
		const newPrice = stockNumber(item.price, item.stock) * count
		setPrice(newPrice)
		setTotalPrice(prev => prev - prevPrice + newPrice)
	}, [count])

	return (
		<div {...props}>
			<img className={styles.itemImage} src={item.img} alt='' />
			<div className={styles.wrapper}>
				<h2 className={styles.itemName}>{item.name}</h2>
				<div className={styles.counter}>
					<button onClick={minusHandler} className={styles.minus}>
						<span></span>
					</button>
					<input
						onChange={changeHandler}
						value={count}
						type='tel'
						className={styles.count}
					/>
					<button onClick={plusHandler} className={styles.plus}>
						<span></span>
						<span></span>
					</button>
				</div>
			</div>
			<div className={styles.wrapper2}>
				<h2 className={styles.itemPrice}>{price} руб</h2>
				<RiDeleteBin5Line
					onClick={_ => removeHandler(item.id)}
					className={styles.deleteIcon}
				/>
			</div>
		</div>
	)
}

export default BasketItem
