import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './store/store'
import { persistor } from './store/store'
import App from './App'
import './styles/style.scss'
import { PersistGate } from 'redux-persist/integration/react'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<Provider store={store}>
		<PersistGate persistor={persistor}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</PersistGate>
	</Provider>
)
