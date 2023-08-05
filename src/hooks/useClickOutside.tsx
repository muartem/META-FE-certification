/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, MouseEvent, MutableRefObject } from 'react'

export default function useClickOutside(elementRef: MutableRefObject<HTMLDivElement | undefined> | undefined, callback: () => void) {
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent<HTMLDivElement>) => {
			// @ts-ignore
			if (!elementRef?.current?.contains(event.target)) {
				callback()
			}

			return
		}


		// @ts-ignore
		document.addEventListener('click', handleClickOutside, true)

		return () => {
			// @ts-ignore
			document.removeEventListener('click', handleClickOutside, true)
		}
	}, [elementRef, callback])
}
