import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle, theme } from 'styles'
import { IAppProviderProps } from './types'

const AppProvider: FC<IAppProviderProps> = ({ children }: IAppProviderProps) => (
	<>
		<BrowserRouter>
			<GlobalStyle/>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</BrowserRouter>
	</>
)


export default AppProvider
