/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useState } from 'react'
import styles from './SearchModal.module.scss'
import { useSearchDevice } from '../../../../hooks/useSearchDevice'
import SearchModalItems from './SearchModalItems'
import { FiSearch } from 'react-icons/fi'
import EmptyCards from '../../../shared/Kostyl/Kostyl'

interface SearchModalProps {
	show: boolean
	setShow: () => void
}

const SearchModal: FC<SearchModalProps> = ({ show, setShow }) => {
	const [showSearch, setShowSearch] = useState(false)
	const [data, error, isLoading, input] = useSearchDevice(
		1500,
		3,
		() => setShowSearch(true),
		() => setShowSearch(false)
	)
	const openModal = () => {
		if (data.length) setShowSearch(true)
	}
	const closeHandler = () => setShowSearch(false)

	return (
		<div
			className={
				show
					? [styles.searchBlock, styles.searchBlockActive].join(' ')
					: styles.searchBlock
			}
		>
			<button onClick={setShow} className={styles.inputClose}>
				&#10006;
			</button>
			<input
				{...input}
				className={styles.searchBlockInput}
				type='text'
				placeholder='Поиск'
			/>
			<div onClick={_ => openModal()} className={styles.searchBlockIcon}>
				<FiSearch />
			</div>
			<div
				className={
					showSearch ? [styles.modal, styles.open].join(' ') : styles.modal
				}
			>
				<button onClick={closeHandler} className={styles.close}>
					&#10006;
				</button>
				<div className={styles.content}>
					<SearchModalItems
						closeHandler={closeHandler}
						data={data}
						error={error}
						isLoading={isLoading}
					/>
					<EmptyCards count={3} width={164} />
				</div>
			</div>
			<div
				onClick={closeHandler}
				className={
					showSearch ? [styles.overlay, styles.open].join(' ') : styles.overlay
				}
			></div>
		</div>
	)
}

export default SearchModal
