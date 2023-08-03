import { FC, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle, theme } from 'styles'


interface IAppProviderProps {
	children: ReactNode,
}

const AppProvider: FC<IAppProviderProps> = ({ children }: IAppProviderProps) => {
	return (
		<>
			<GlobalStyle/>
			<ThemeProvider theme={theme}>
				{children}
			</ThemeProvider>
		</>
	)
}

export default AppProvider
