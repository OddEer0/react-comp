/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import PageLayout from './components/layout/PageLayout'
import { useAppDispatch } from './hooks/redux'
import CatalogPage from './pages/Catalogpage/Catalogpage'
import DevicePage from './pages/Devicepage/Devicepage'
import Favoritepage from './pages/Favoritepage/Favoritepage'
import HomePage from './pages/Homepage/Homepage'
import Profilepage from './pages/Profilepage/Profilepage'
import RequireAuthProfilepage from './pages/Profilepage/RequireAuthProfilepage'
import SingleDevicepage from './pages/SingleDevicepage/SingleDevicepage'
import { fetchCategory } from './store/category/categoryAction'

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
					<Route path='catalog/:category/:id' element={<SingleDevicepage />} />
					<Route path='favorite' element={<Favoritepage />} />
					<Route
						path='profile'
						element={
							<RequireAuthProfilepage>
								<Profilepage />
							</RequireAuthProfilepage>
						}
					/>
				</Route>
			</Routes>
		</div>
	)
}

export default App
