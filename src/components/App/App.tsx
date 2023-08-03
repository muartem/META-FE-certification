import { FC } from 'react'
import AppProvider from './AppProvider'
import { Footer, Header } from 'components'
import './App.css'


const App: FC = () => {
	return (
		<AppProvider>
			<Header/>
			<Footer/>
		</AppProvider>
	)
}

export default App
