/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import { headerImage } from '../../assets/img'
import { useDebounce } from '../../hooks/useDebounce'
import { apiService } from '../../services/api/api.service'
import { IDevice } from '../../types/IDevice'
import ErrorFetch from '../ErrorFetch/ErrorFetch'
import NotItems from '../NotItems/NotItems'
import Loading from '../UI/Loading/Loading'
import styles from './SearchModal.module.scss'
import SearchModalItems from './SearchModalItems'

interface SearchModalProps {}

const SearchModal: FC<SearchModalProps> = props => {
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')
	const [data, setData] = useState<IDevice[]>([])
	const [searchValue, setSearchValue] = useState('')
	const [showSearch, setShowSearch] = useState(false)

	const fetchData = async () => {
		try {
			setIsLoading(true)
			const response = await axios.get(apiService.getSearchDevice(searchValue))
			setData(response.data)
		} catch (e) {
			setError('Что-то пошло не так')
		} finally {
			setIsLoading(false)
		}
	}

	const openModal = () => {
		setShowSearch(true)
		fetchData()
	}

	const debounce = useDebounce(() => {
		if (searchValue && searchValue.length > 3) {
			openModal()
		} else {
			setShowSearch(false)
		}
	}, 2000)

	useEffect(() => {
		debounce()
	}, [searchValue])

	const closeHandler = () => setShowSearch(false)

	return (
		<div className={styles.searchBlock}>
			<input
				value={searchValue}
				onChange={e => setSearchValue(e.target.value)}
				className={styles.searchBlockInput}
				type='text'
				placeholder='Поиск'
			/>
			<div onClick={_ => openModal()} className={styles.searchBlockIcon}>
				<img src={headerImage.search} alt='' />
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
					{error ? (
						<ErrorFetch error={error} />
					) : isLoading ? (
						<Loading />
					) : data.length ? (
						data.map(device => (
							<SearchModalItems
								key={device.id}
								item={device}
								onClick={closeHandler}
							/>
						))
					) : (
						<NotItems title='Таких товаров нет' />
					)}
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
