import { FC } from 'react'
import routes, { IRouter } from 'constants/routes'
import { Route, Routes } from 'react-router-dom'
import AppProvider from './AppProvider'
import { Footer, Header } from 'components'
import { Container } from './App.style'

const App: FC = () => {
	return (
		<AppProvider>
			<Header/>
			<Container>
				<Routes>
					{routes.map((route: IRouter) => (
						<Route
							key={route.title}
							path={route.path}
							element={route.element}
						/>
					))}
				</Routes>
			</Container>
			<Footer/>
		</AppProvider>
	)
}

export default App
