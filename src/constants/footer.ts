import {
	faInstagram,
	faFacebook,
	faTiktok,
	faTwitter,
	IconDefinition,
} from '@fortawesome/free-brands-svg-icons'

export interface ISocials {
	title: string
	href: string
	icon: IconDefinition
}

export const socials: ISocials[] = [
	{
		title: 'Instagram',
		href: 'https://www.instagram.com/',
		icon: faInstagram,
	},
	{
		title: 'Facebook',
		href: 'https://www.facebook.com/',
		icon: faFacebook,
	},
	{
		title: 'Tiktok',
		href: 'https://www.tiktok.com/',
		icon: faTiktok,
	},
	{
		title: 'Twitter',
		href: 'https://www.twitter.com/',
		icon: faTwitter,
	},
]

export interface IContacts {
	label: string
	value: string
}

export const contacts: IContacts[] = [
	{
		label: 'Address',
		value: '1531 W Taylor St, Chicago, IL 60607, United States',
	},
	{
		label: 'Phone',
		value: '+13124215179',
	},
	{
		label: 'Open',
		value: '11a.m. – 10p.m.',
	},
]
