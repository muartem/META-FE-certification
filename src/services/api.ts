/* eslint-disable @typescript-eslint/no-unused-vars,@typescript-eslint/no-explicit-any */
import { FormInput } from 'components/Booking/types'

const seededRandom = (seed: number) => {
	const m = 2 ** 35 - 31
	const a = 185852
	let s = seed % m

	return () => (s = s * a % m) / m
}

export const fetchAPI = (date: Date) => {
	const result = []
	const random: () => number = seededRandom(date.getDate())

	for (let i = 17; i <= 23; i++) {
		if (random() < 0.5) result.push(i + ':00')
		if (random() < 0.5) result.push(i + ':30')
	}

	return result
}

export const submitAPI = (formData: FormInput) => true
