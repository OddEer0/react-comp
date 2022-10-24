import React, { FC } from 'react'
import HomeFirstSection from './sections/FirstSection/HomeFirstSecrion'

interface HomePageProps {}

const HomePage: FC<HomePageProps> = props => {
	return (
		<main>
			<HomeFirstSection />
		</main>
	)
}

export default HomePage
