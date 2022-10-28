import React, { FC } from 'react'
import ContentLoader from 'react-content-loader'

interface CategorySkeletonProps {
	className?: string
}

const CategorySkeleton: FC<CategorySkeletonProps> = ({ className }) => {
	return (
		<ContentLoader
			speed={2}
			width={250}
			height={320}
			viewBox='0 0 250 320'
			backgroundColor='#a3a3a3'
			foregroundColor='#969696'
			className={className}
		>
			<rect x='20' y='20' rx='5' ry='5' width='210' height='210' />
			<rect x='20' y='249' rx='15' ry='15' width='210' height='20' />
			<rect x='20' y='277' rx='15' ry='15' width='210' height='20' />
		</ContentLoader>
	)
}

export default CategorySkeleton
