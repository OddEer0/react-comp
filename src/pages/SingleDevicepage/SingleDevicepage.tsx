import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import { useFetching } from '../../hooks/useFetching'
import { apiService } from '../../services/api/api.service'
import styles from './SingleDevice.module.scss'

interface SingleDevicepageProps {}

const SingleDevicepage: FC<SingleDevicepageProps> = props => {
	const params = useParams()
	const [device, error, isLoading] = useFetching(
		apiService.getDevice(params.id as string)
	)

	return (
		<div className='container'>
			<div className=''></div>
		</div>
	)
}

export default SingleDevicepage
