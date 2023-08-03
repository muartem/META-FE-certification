import { FC } from 'react'
import routes, { IRouter } from 'constants/routes'
import { Link, useLocation } from 'react-router-dom'
import { Li, StyledNavigation } from './NavigationStyle'

const Navigation: FC = () => {
	const { pathname } = useLocation()

	return <StyledNavigation>
		{routes.map((route: IRouter) => (
			<Li $current={pathname === route.path} key={route.path}>
				<Link to={route.path}>{route.title}</Link>
			</Li>
		))}
	</StyledNavigation>
}

export default Navigation
