import { FC } from 'react'
import { BsGrid3X3Gap, BsListUl } from 'react-icons/bs'
import styles from './SelectCardPosition.module.scss'

interface SelectCardPositionProps {
	vertical: boolean
	setVertical: (bool: boolean) => void
	className?: string
}

const SelectCardPosition: FC<SelectCardPositionProps> = ({
	vertical,
	setVertical,
	className,
}) => {
	return (
		<div className={[styles.block, className].join(' ')}>
			<BsGrid3X3Gap
				className={
					vertical ? styles.icon : [styles.active, styles.icon].join(' ')
				}
				onClick={_ => setVertical(false)}
			/>
			<BsListUl
				className={
					!vertical ? styles.icon : [styles.active, styles.icon].join(' ')
				}
				onClick={_ => setVertical(true)}
			/>
		</div>
	)
}

export default SelectCardPosition
