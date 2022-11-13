import React, { FC } from 'react'
import GreenButton from '../../../ui/buttons/GreenButton/GreenButton'
import MyModal from '../MyModal/MyModal'
import RedButton from '../../../ui/buttons/RedButton/RedButton'
import styles from './ConfirmModal.module.scss'

interface ConfirmModalProps {
	show: boolean
	setShow: (bool: boolean) => void
	yesHandler: () => void
	notHandler: () => void
}

const ConfirmModal: FC<ConfirmModalProps> = ({
	show,
	setShow,
	yesHandler,
	notHandler,
}) => {
	return (
		<MyModal subClass={styles.confirm} show={show} setShow={setShow}>
			<h1>Вы уверены в действий?</h1>
			<div className={styles.confirmButtons}>
				<RedButton onClick={notHandler}>Нет</RedButton>
				<GreenButton onClick={yesHandler} title='Да' />
			</div>
		</MyModal>
	)
}

export default ConfirmModal
