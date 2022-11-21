import { FC } from 'react'
import { IDevice } from '../../../../types/IDevice'
import ErrorFetch from '../../../shared/ErrorFetch/ErrorFetch'
import Loading from '../../../shared/Loading/Loading'
import NotItems from '../../../shared/NotItems/NotItems'
import SearchModalItem from './SearchModalItem'

interface SearchModalItemsProps {
	data: IDevice[]
	isLoading: boolean
	error: string
	closeHandler: () => void
}

const SearchModalItems: FC<SearchModalItemsProps> = ({
	data,
	error,
	isLoading,
	closeHandler,
}) => {
	return (
		<>
			{error ? (
				<ErrorFetch error={error} />
			) : isLoading ? (
				<Loading />
			) : data.length ? (
				data.map(device => (
					<SearchModalItem
						key={device.id}
						item={device}
						onClick={closeHandler}
					/>
				))
			) : (
				<NotItems title='Таких товаров нет' />
			)}
		</>
	)
}

export default SearchModalItems
