import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { IDevice } from '../../../../types/IDevice'
import styles from './SearchModal.module.scss'

interface SearchModalItemProps extends React.HTMLAttributes<HTMLDivElement> {
	item: IDevice
}

const SearchModalItem: FC<SearchModalItemProps> = ({ item, ...props }) => {
	return (
		<div {...props}>
			<Link to={`catalog/${item.category}/${item.id}`} className={styles.card}>
				<img src={item.img} alt='' />
				<h2>{item.name}</h2>
			</Link>
		</div>
	)
}

export default SearchModalItem
