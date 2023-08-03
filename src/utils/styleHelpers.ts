import { ITheme } from './types'

export const getColor = (color: string) =>
	({ theme }: ITheme): string =>
		theme.colors[color]
