import React, { FC } from 'react'
import styles from './MyModal.module.scss'

interface MyModalProps {
	show: boolean
	setShow: (show: boolean) => void
	children: React.ReactNode | React.ReactElement
	subClass?: string
}

const MyModal: FC<MyModalProps> = ({
	show,
	setShow,
	children,
	subClass = '',
	...props
}) => {
	return (
		<div className={`${styles.MyModal} ${show && styles.active}`}>
			<div onClick={_ => setShow(false)} className={styles.overlay}></div>
			<div className={`${styles.content} ${subClass}`} {...props}>
				{children}
			</div>
		</div>
	)
}

export default MyModal
