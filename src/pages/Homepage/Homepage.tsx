import React, { FC } from 'react'
import HomeFirstSection from './sections/FirstSection/HomeFirstSection'
import HomeSecondSection from './sections/SecondSection/HomeSecondSection'

interface HomePageProps {}

const HomePage: FC<HomePageProps> = props => {
	return (
		<>
			<HomeFirstSection />
			<HomeSecondSection />
		</>
	)
}

export default HomePage
