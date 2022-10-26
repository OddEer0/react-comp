import React, { FC } from 'react'
import HomeFirstSection from './sections/FirstSection/HomeFirstSection'

interface HomePageProps {}

const HomePage: FC<HomePageProps> = props => {
	return (
		<>
			<HomeFirstSection />
		</>
	)
}

export default HomePage
