import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import ErrorFetch from '../../components/shared/ErrorFetch/ErrorFetch'
import SinglePageImgSkeleton from '../../components/ui/skeletons/SinglePageImgSkeleton'
import { useFetching } from '../../hooks/useFetching'
import { apiService } from '../../services/api/api.service'
import { IDevice } from '../../types/IDevice'
import FirstSection from './section/FirstSection/FirstSection'

interface SingleDevicePageProps {}

const SingleDevicePage: FC<SingleDevicePageProps> = props => {
	const params = useParams()
	const [data, error, isLoading] = useFetching<IDevice[]>(
		apiService.getDevice(params.id as string)
	)
	if (error) <ErrorFetch error='Что то пошло не так' />

	if (isLoading)
		return (
			<div className={['container'].join(' ')}>
				<SinglePageImgSkeleton />
			</div>
		)

	return (
		<>
			<FirstSection item={data ? data[0] : ({} as IDevice)} />
		</>
	)
}

export default SingleDevicePage
