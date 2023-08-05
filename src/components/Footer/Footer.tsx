import { FC } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { contacts, IContacts, ISocials, socials } from 'constants/footer'
import routes, { IRouter } from 'constants/routes'
import { Container, Logo, StyledFooter } from './FooterStyle'
import logo from 'assets/Asset 20@4x.png'

const Footer: FC = () => {
	return (
		<StyledFooter>
			<Container>
				<div>
					<Link to="/">
						<Logo alt="logo" src={logo}/>
					</Link>
				</div>
				<div>
					<h4>Links:</h4>
					<ul>
						{routes.map((route: IRouter) => (
							<li key={route.path}>
								<Link to={route.path}>{route.title}</Link>
							</li>
						))}
					</ul>
				</div>
				<div>
					<h4>Social media:</h4>
					<ul>
						{socials.map((soc: ISocials) => (
							<li key={soc.title}>
								<a href={soc.href} target="_blank" rel="noopener noreferrer">
									<FontAwesomeIcon icon={soc.icon} size="1x"/>
									<span> {soc.title}</span>
								</a>
							</li>
						))}
					</ul>
				</div>
				<div>
					<h4>Contact:</h4>
					<ul>
						{contacts.map((con: IContacts) => (
							<li key={con.label}>
								<b>{con.label}:</b> {con.value}
							</li>
						))}
					</ul>
				</div>
			</Container>
		</StyledFooter>
	)
}

export default Footer
