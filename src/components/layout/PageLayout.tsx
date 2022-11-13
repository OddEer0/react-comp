import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'
import Header from './Header/Header'

interface PageLayoutProps {}

const PageLayout: FC<PageLayoutProps> = props => {
	return (
		<>
			<Header />

			<main>
				<Outlet />
			</main>

			<Footer />
		</>
	)
}

export default PageLayout
