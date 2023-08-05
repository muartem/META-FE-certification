/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FC, useEffect, useRef, useState } from 'react'
import routes, { IRouter } from 'constants/routes'
import { Link, useLocation } from 'react-router-dom'
import useClickOutside from '../../hooks/useClickOutside'
import Burger from './Burger'
import { Li, Ul, Nav } from './NavigationStyle'

const Navigation: FC = () => {
	const { pathname } = useLocation()
	const [burgerOpen, setBurgerOpen] = useState<boolean>(false)
	const navRef = useRef<HTMLDivElement>()

	useEffect(() => {
		setBurgerOpen(false)
	}, [pathname])

	useClickOutside(navRef, () => {
		setBurgerOpen(false)
	})


	const toggleBurger = () => {
		setBurgerOpen(state => !state)
	}

	return (
		// @ts-ignore
		<Nav ref={navRef}>
			<Burger isOpen={burgerOpen} onClick={toggleBurger}/>
			{/*@ts-ignore*/}
			<Ul $isOpen={burgerOpen}>
				{routes.map((route: IRouter) => (
					// @ts-ignore
					<Li $current={pathname === route.path} key={route.path}>
						<Link to={route.path}>{route.title}</Link>
					</Li>
				))}
			</Ul>
		</Nav>
	)
}

export default Navigation
