import { ReactElement } from 'react'


export interface IRouter {
	title: string;
	path: string;
	element: ReactElement;
}

const router: IRouter[] = [
	{
		path: '/',
		element: <div>Home</div>,
		title: 'Home',
	},
	{
		path: '/menu',
		element: <div>Menu</div>,
		title: 'Menu',
	},
	{
		path: '/book',
		element: <div>Book</div>,
		title: 'Book',
	},
	{
		path: '/order',
		element: <div>Order</div>,
		title: 'Order',
	},
]

export default router
