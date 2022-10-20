import React, { FC } from 'react'
import HomeFirstSection from './sections/FirstSection/HomeFirstSecrion'

interface HomeProps {}

const Home: FC<HomeProps> = props => {
	return (
		<main>
			<HomeFirstSection />
		</main>
	)
}

export default Home
