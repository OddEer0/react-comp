import React, { FC, useState } from 'react'
import { useAppSelector } from '../../../../hooks/redux'
import NotItems from '../../../shared/NotItems/NotItems'
import BlueNeonButton from '../../../ui/buttons/BlueNeonButton/BlueNeonButton'
import GreenButton from '../../../ui/buttons/GreenButton/GreenButton'
import MyModal from '../MyModal/MyModal'
import BasketItem from './BasketItem'
import styles from './BasketModal.module.scss'

interface BasketModalProps {
	show: boolean
	setShow: () => void
}

const BasketModal: FC<BasketModalProps> = ({ show, setShow }) => {
	const { basketItem } = useAppSelector(state => state.basket)
	const [totalPrice, setTotalPrice] = useState(0)

	return (
		<MyModal show={show} setShow={setShow} subClass={styles.modal}>
			<div className={styles.header}>
				<h1>Корзина</h1>
				<button onClick={setShow}>&#10006;</button>
			</div>
			<div className={styles.body}>
				<div className={styles.itemList}>
					{basketItem.length ? (
						basketItem.map(item => (
							<BasketItem
								key={item.id}
								item={item}
								setTotalPrice={setTotalPrice}
								className={styles.basketItem}
							/>
						))
					) : (
						<NotItems title='Корзина пуста' />
					)}
				</div>
				<div className={styles.buttons}>
					<BlueNeonButton>Продолжить покупки</BlueNeonButton>
					<div className={styles.buy}>
						<h2>{totalPrice} руб</h2>
						<GreenButton title='Оформить заказ' />
					</div>
				</div>
			</div>
		</MyModal>
	)
}

export default BasketModal
