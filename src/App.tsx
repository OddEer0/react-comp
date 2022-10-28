/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import PageLayout from './components/PageLayout'
import { useAppDispatch } from './hooks/redux'
import CatalogPage from './pages/Catalogpage/Catalogpage'
import DevicePage from './pages/Devicepage/Devicepage'
import HomePage from './pages/Homepage/Homepage'
import { fetchCategory } from './store/actionCreator/categoryAction'

function App() {
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchCategory())
	}, [])

	return (
		<div className='wrapper'>
			<Routes>
				<Route path='/react-comp/' element={<PageLayout />}>
					<Route index element={<HomePage />} />
					<Route path='catalog' element={<CatalogPage />} />
					<Route path='catalog/:category' element={<DevicePage />} />
				</Route>
			</Routes>
		</div>
	)
}

export default App
