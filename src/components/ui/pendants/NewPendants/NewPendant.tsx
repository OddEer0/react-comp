import React, { FC } from 'react'
import styles from './NewPendant.module.scss'

interface NewPendantProps extends React.HTMLAttributes<HTMLDivElement> {
	className?: string
}

const NewPendant: FC<NewPendantProps> = ({ className, children, ...props }) => {
	return <div className={[styles.pendant, className].join(' ')}>{children}</div>
}

export default NewPendant
