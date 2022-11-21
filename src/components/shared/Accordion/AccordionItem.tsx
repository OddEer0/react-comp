import React, { FC, useRef } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useToggle } from '../../../hooks/useToggle'
import { IAccordion } from '../../../types/IAccordion'
import styles from './Accordion.module.scss'

const AccordionItem: FC<IAccordion> = ({ title, subItem }) => {
	const { state: open, toggleHandler } = useToggle()
	const itemRef = useRef<HTMLButtonElement>(null)
	const subRef = useRef<HTMLDivElement>(null)

	const fullHeight = () => {
		let sum = 0
		if (subRef.current?.offsetHeight) sum += subRef.current.offsetHeight
		if (itemRef.current?.offsetHeight) sum += itemRef.current.offsetHeight
		return sum
	}

	return (
		<div
			className={styles.accordionItemBlock}
			style={{
				height: open ? fullHeight() : itemRef.current?.offsetHeight,
			}}
		>
			<button
				onClick={toggleHandler}
				ref={itemRef}
				className={styles.accordionItem}
			>
				<h4>{title}</h4>{' '}
				<IoIosArrowDown
					style={{ transform: open ? 'rotate(180deg)' : '' }}
					className={styles.arrow}
				/>
			</button>
			<div ref={subRef} className={styles.accordionSubItemBlock}>
				{subItem.map(subItem =>
					subItem.to ? (
						<Link
							className={styles.accordionSubItem}
							key={subItem.id}
							to={subItem.to}
						>
							{subItem.title}
						</Link>
					) : (
						<h2 className={styles.accordionSubItem} key={subItem.id}>
							{subItem.title}
						</h2>
					)
				)}
			</div>
		</div>
	)
}

export default AccordionItem
