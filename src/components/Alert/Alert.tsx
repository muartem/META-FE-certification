import MuiAlert, { AlertProps } from '@mui/material/Alert'
import { forwardRef } from 'react'

const Alert = forwardRef<HTMLDivElement, AlertProps>(
	(
		props, ref,
	) => <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />,
)

Alert.displayName = 'Alert'

export default Alert