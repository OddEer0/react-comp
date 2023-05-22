/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import PageLayout from './components/layout/PageLayout'
import { useAppDispatch } from './hooks/redux'
import CatalogPage from './pages/CatalogPage'
import DevicePage from './pages/DevicePage/DevicePage'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import FavoritePage from './pages/FavoritePage/FavoritePage'
import HomePage from './pages/Homepage/HomePage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import RequireAuthProfilePage from './pages/ProfilePage/RequireAuthProfilePage'
import SingleDevicePage from './pages/SingleDevicePage/SingleDevicePage'
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
					<Route path='catalog/:category/:id' element={<SingleDevicePage />} />
					<Route path='favorite' element={<FavoritePage />} />
					<Route
						path='profile'
						element={
							<RequireAuthProfilePage>
								<ProfilePage />
							</RequireAuthProfilePage>
						}
					/>
					<Route path='*' element={<ErrorPage />} />
				</Route>
			</Routes>
		</div>
	)
}

export default App
