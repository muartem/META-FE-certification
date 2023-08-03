import { FC } from 'react'
import Navigation from '../Navigation'
import { Container, Logo, StyledHeader } from './HeaderStyle'
import logo from 'assets/Asset 16@4x.png'

const Header: FC = () => (
	<StyledHeader>
		<Container>
			<Logo src={logo}/>
			<Navigation/>
		</Container>
	</StyledHeader>
)

export default Header
