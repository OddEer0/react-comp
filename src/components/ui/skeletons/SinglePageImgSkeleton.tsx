import React, { FC } from 'react'
import ContentLoader from 'react-content-loader'

interface SinglePageImgSkeletonProps {}

const SinglePageImgSkeleton: FC<SinglePageImgSkeletonProps> = props => {
	return (
		<ContentLoader
			speed={2}
			width={'50%'}
			height={'50%'}
			viewBox='0 0 500 500'
			backgroundColor='#a3a3a3'
			foregroundColor='#969696'
			{...props}
		>
			<rect x='26' y='97' rx='24' ry='24' width='400' height='400' />
		</ContentLoader>
	)
}

export default SinglePageImgSkeleton
