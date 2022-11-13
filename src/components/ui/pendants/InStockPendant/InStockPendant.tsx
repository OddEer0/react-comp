import React, { FC } from 'react'
import { specialIcon } from '../../../../assets/img'
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
			<img src={specialIcon.check} alt='' />
			{children}
		</div>
	)
}

export default InStockPendant
