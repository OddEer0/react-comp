import React, { FC } from 'react'
import ContentLoader from 'react-content-loader'

const SidebarSkeleton: FC = () => {
	return (
		<ContentLoader
			speed={2}
			width={320}
			height={48}
			viewBox='0 0 320 48'
			backgroundColor='#f3f3f3'
			foregroundColor='#ecebeb'
		>
			<circle cx='24' cy='24' r='12' />
			<rect x='48' y='16' rx='4' ry='4' width='250' height='15' />
		</ContentLoader>
	)
}

export default SidebarSkeleton
