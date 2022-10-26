import React, { FC, useState } from 'react'
import { ICategory } from '../../types/ICategory'
import SidebarSkeleton from '../Skeletons/SidebarSkeleton'
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
	const [showModal, setShowModal] = useState<boolean>(false)
	const [currentActive, setCurrentActive] = useState<number>(0)

	const clickHandler = (id: number): void => {
		setShowModal(true)
		setCurrentActive(id)
		document.body.classList.add('no-scroll-2')
	}

	const hideHandler = (): void => {
		setShowModal(false)
		setCurrentActive(0)
		document.body.classList.remove('no-scroll-2')
	}

	return (
		<>
			<div
				onClick={hideHandler}
				className={`${styles.overlay} ${showModal && styles.modalActive}`}
			></div>
			<aside className={styles.sidebar}>
				{isLoading
					? [...Array(11)].map((_, index) => <SidebarSkeleton key={index} />)
					: error
					? [...Array(11)].map((_, index) => <h3 key={index}>{error}</h3>)
					: items.map(item => (
							<SidebarItem
								key={item.id}
								item={item}
								onClick={clickHandler}
								className={`${styles.sidebarItem} ${
									item.id === currentActive && styles.itemActive
								}`}
							/>
					  ))}
				<div
					className={`${styles.sidebarModal} ${
						showModal && styles.modalActive
					}`}
				>
					<div className={styles.content}></div>
				</div>
			</aside>
		</>
	)
}

export default SidebarMenu
