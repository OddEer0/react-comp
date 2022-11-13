import React, { FC } from 'react'
import ContentLoader from 'react-content-loader'

interface DeviceSkeletonProps {}

const DeviceSkeleton: FC<DeviceSkeletonProps> = props => {
	return (
		<ContentLoader
			speed={2}
			width={250}
			height={420}
			style={{ margin: 16 }}
			viewBox='0 0 250 420'
			backgroundColor='#a3a3a3'
			foregroundColor='#969696'
		>
			<circle cx='216' cy='28' r='12' />
			<circle cx='186' cy='28' r='12' />
			<circle cx='156' cy='28' r='12' />
			<rect x='12' y='52' rx='4' ry='4' width='218' height='214' />
			<rect x='12' y='275' rx='10' ry='10' width='218' height='17' />
			<rect x='12' y='297' rx='10' ry='10' width='218' height='17' />
			<rect x='12' y='328' rx='13' ry='13' width='120' height='20' />
			<rect x='159' y='360' rx='5' ry='5' width='73' height='33' />
			<rect x='12' y='360' rx='5' ry='5' width='86' height='33' />
		</ContentLoader>
	)
}

export default DeviceSkeleton
