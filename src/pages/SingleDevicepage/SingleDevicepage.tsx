import React, { FC, useRef, useState } from 'react'
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

	const count = useRef<number>(10)
	const [state, setState] = useState(5)

	console.log('rerender')

	const handle = () => {
		console.log((count.current += 1))
	}

	const handler = () => {
		setState(prev => prev + 1)
	}

	return (
		<div className='container'>
			<div className='dss'>
				<h1>{state}</h1>
				<h1>{count.current}</h1>
				<button onClick={handle}>click</button>
				<button onClick={handler}>click</button>
			</div>
		</div>
	)
}

export default SingleDevicepage
