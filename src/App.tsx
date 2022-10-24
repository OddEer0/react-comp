import React from 'react'
import { Routes, Route } from 'react-router-dom'
import PageLayout from './components/PageLayout'
import CatalogPage from './pages/Catalogpage/Catalogpage'
import DevicePage from './pages/Devicepage/Devicepage'
import HomePage from './pages/Homepage/Homepage'

function App() {
	return (
		<div>
			<Routes>
				<Route path='/react-comp/' element={<PageLayout />}>
					<Route index element={<HomePage />} />
					<Route path='catalog' element={<CatalogPage />} />
					<Route path='catalog/:category' element={<DevicePage />} />
					<Route path='catalog/:category/:id' element={<DevicePage />} />
				</Route>
			</Routes>
		</div>
	)
}

export default App
