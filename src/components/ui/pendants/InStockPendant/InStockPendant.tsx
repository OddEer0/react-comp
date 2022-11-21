import React, { FC } from 'react'
import { BsCheckLg } from 'react-icons/bs'
import styles from './InStockPendant.module.scss'

interface InStockPendantProps extends React.HTMLAttributes<HTMLDivElement> {
	className?: string
}

const InStockPendant: FC<InStockPendantProps> = ({
	className,
	children,
	...props
}) => {
	return (
		<div className={[styles.pendant, className].join(' ')}>
			<BsCheckLg className={styles.icon} />
			{children}
		</div>
	)
}

export default InStockPendant
