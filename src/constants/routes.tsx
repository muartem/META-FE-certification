import { ReactElement } from 'react'
import Blanc from 'components/Blanc'

export interface IRouter {
	title: string
	path: string
	element: ReactElement
}

const router: IRouter[] = [
	{
		path: '/',
		element: <Blanc/>,
		title: 'Home',
	},
	{
		path: '/menu',
		element: <Blanc/>,
		title: 'Menu',
	},
	{
		path: '/book',
		element: <Blanc/>,
		title: 'Book',
	},
	{
		path: '/order',
		element: <Blanc/>,
		title: 'Order',
	},
]

export default router
