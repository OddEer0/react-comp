import React, { FC } from 'react'
import { IAccordion } from '../../../types/IAccordion'
import styles from './Accordion.module.scss'
import AccordionItem from './AccordionItem'

interface AccordionProps {
	items: IAccordion[]
}

const Accordion: FC<AccordionProps> = ({ items }) => {
	return (
		<div className={styles.accordion}>
			{items.map(item => (
				<AccordionItem
					key={item.id}
					id={item.id}
					title={item.title}
					subItem={item.subItem}
				/>
			))}
		</div>
	)
}

export default Accordion
