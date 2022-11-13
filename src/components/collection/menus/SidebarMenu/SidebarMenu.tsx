/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import { fetchDevice } from '../../../../store/device/deviceAction'
import { ICategory } from '../../../../types/ICategory'
import ErrorFetch from '../../../shared/ErrorFetch/ErrorFetch'
import SidebarSkeleton from '../../../ui/skeletons/SidebarSkeleton'
import SidebarContent from './SidebarContent'
import SidebarItem from './SidebarItem'
import styles from './SidebarMenu.module.scss'

interface SidebarMenuProps {
	items: ICategory[]
	isLoading?: boolean
	error?: null | string
}

const SidebarMenu: FC<SidebarMenuProps> = ({
	items,
	isLoading = false,
	error = null,
}) => {
	const [showModal, setShowModal] = useState(false)
	const [currentActive, setCurrentActive] = useState(0)
	const {
		deviceItem,
		error: errorContent,
		isLoading: isLoadingContent,
	} = useAppSelector(state => state.device)
	const dispatch = useAppDispatch()

	const clickHandler = (id: number): void => {
		setShowModal(true)
		setCurrentActive(id)
		document.body.classList.add('no-scroll-2')
	}

	useEffect(() => {
		if (currentActive) {
			dispatch(fetchDevice({ category: currentActive }))
		}
	}, [currentActive])

	const hideHandler = (): void => {
		setShowModal(false)
		document.body.classList.remove('no-scroll-2')
	}

	return (
		<>
			<div
				onClick={hideHandler}
				className={`${styles.overlay} ${showModal && styles.modalActive}`}
			></div>
			<aside className={styles.sidebar}>
				{isLoading ? (
					[...Array(11)].map((_, index) => <SidebarSkeleton key={index} />)
				) : error ? (
					<ErrorFetch error={error} />
				) : (
					items.map(item => (
						<SidebarItem
							key={item.id}
							item={item}
							onClick={clickHandler}
							className={`${styles.sidebarItem} ${
								item.id === currentActive && styles.itemActive
							}`}
						/>
					))
				)}
				<div
					className={`${styles.sidebarModal} ${
						showModal && styles.modalActive
					}`}
				>
					<SidebarContent
						className={styles.content}
						items={deviceItem}
						error={errorContent}
						isLoading={isLoadingContent}
						closeHandler={hideHandler}
					/>
				</div>
			</aside>
		</>
	)
}

export default SidebarMenu
