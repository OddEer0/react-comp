import React, { FC } from 'react'
import { IDevice } from '../../../../types/IDevice'
import ErrorFetch from '../../../shared/ErrorFetch/ErrorFetch'
import NotItems from '../../../shared/NotItems/NotItems'
import Loading from '../../../shared/Loading/Loading'
import SidebarContentItem from './SidebarContentItem'
import styles from './SidebarMenu.module.scss'

interface SidebarContentProps extends React.HTMLAttributes<HTMLDivElement> {
	items: IDevice[]
	error: string | null
	isLoading: boolean
	closeHandler: () => void
}

const SidebarContent: FC<SidebarContentProps> = ({
	items,
	error,
	isLoading,
	closeHandler,
	...props
}) => {
	return (
		<div {...props}>
			{isLoading ? (
				<Loading />
			) : error ? (
				<ErrorFetch
					error={error}
					title='Попробуйте проверить интернет соединение'
				/>
			) : items.length ? (
				items.map(item => <SidebarContentItem key={item.id} item={item} />)
			) : (
				<NotItems title='К сожалению у нас не осталось таких товаров' />
			)}
			<button onClick={closeHandler} className={styles.close}>
				&#10006;
			</button>
		</div>
	)
}

export default SidebarContent
