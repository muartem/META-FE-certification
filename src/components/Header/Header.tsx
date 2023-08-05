import { FC } from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../Navigation'
import { Container, Logo, StyledHeader } from './Header.style'
import logo from 'assets/Asset 16@4x.png'

const Header: FC = () => (
	<StyledHeader>
		<Container>
			<Link to="/">
				<Logo src={logo}/>
			</Link>
			<Navigation/>
		</Container>
	</StyledHeader>
)

export default Header
