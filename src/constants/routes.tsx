import { ReactElement } from 'react'


export interface IRouter {
	title: string;
	path: string;
	element: ReactElement;
}

const router: IRouter[] = [
	{
		path: '/',
		element: <span>Home</span>,
		title: 'Home',
	},
	{
		path: '/menu',
		element: <span>Menu</span>,
		title: 'Menu',
	},
	{
		path: '/book',
		element: <span>Book</span>,
		title: 'Book',
	},
	{
		path: '/order',
		element: <span>Order</span>,
		title: 'Order',
	},
]

export default router
