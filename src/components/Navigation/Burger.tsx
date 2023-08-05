import { FC } from 'react'
import { StyledBurger } from './Navigation.style'
import { IBurger } from './types'

const Burger: FC<IBurger> = ({ isOpen, onClick }: IBurger) => {
	return (
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore

		<StyledBurger $isOpen={isOpen} onClick={onClick}>
			<div/>
			<div/>
			<div/>
		</StyledBurger>
	)
}

export default Burger
