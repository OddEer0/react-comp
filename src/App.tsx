import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'

function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route path='/comp/home' element={<Home />} />
			</Routes>
		</div>
	)
}

export default App
