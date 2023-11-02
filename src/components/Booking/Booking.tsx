import { FC, useEffect, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { TextField, Select, MenuItem, FormHelperText, FormControl, Snackbar, InputLabel, Grid } from '@mui/material'
import moment from 'moment'
import { FormProvider, useForm, Controller, useWatch } from 'react-hook-form'
import { fetchAPI, submitAPI } from 'services/api'
import Alert from '../Alert'
import { BookingStyle, StyledButton, StyledInput } from './Booking.style'
import { defaultValues, validationSchema } from './schema'
import { FormInput } from './types'


const Booking: FC = () => {
	const [timeSlots, setTimeSlots] = useState<string[]>([])
	const [open, setOpen] = useState<{ data?: FormInput, error?: string }>({})

	const form = useForm({
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		resolver: yupResolver<FormInput>(validationSchema),
		defaultValues,
	})

	const {
		control, handleSubmit, reset,
	} = form

	const selectedDate = useWatch({ control, name: 'date' })

	const onSubmit = async (data: FormInput) => {
		try {
			const res = await submitAPI(data)
			setOpen({ data: res })
			reset()

			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (e: any) {
			setOpen({ error: e.message })
		}
	}

	const getTimeSlots = (date: Date | string) => {
		try {
			const res = fetchAPI(new Date(date))
			setTimeSlots(res)

			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (e: any) {
			setOpen({ error: e.message })
		}
	}

	useEffect(() => {
		getTimeSlots(selectedDate)
	}, [selectedDate])


	const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
		if (reason === 'clickaway') {
			return
		}

		setOpen({})
	}

	return (
		<BookingStyle>
			<FormProvider {...form}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Grid container padding={2} spacing={2}>
						<Grid item xs={12}>
							<Controller
								name="name"
								control={control}
								render={({ field, fieldState }) => (
									<TextField
										label="Name"
										{...field}
										fullWidth
										error={fieldState.invalid}
										helperText={fieldState.error?.message}/>
								)}
							/>
						</Grid>
						<Grid item xs={12}>
							<Controller
								name="phone"
								control={control}
								render={({ field, fieldState }) => (
									<TextField
										type="tel"
										label="Phone"
										{...field}
										fullWidth
										error={fieldState.invalid}
										helperText={fieldState.error?.message}/>
								)}
							/>
						</Grid>
						<Grid item xs={12}>
							<Controller
								name="date"
								control={control}
								render={({ field, fieldState }) => (
									<StyledInput
										label="Date"
										type="date"
										{...field}
										fullWidth
										error={fieldState.invalid}
										helperText={fieldState.error?.message}
									/>
								)}
							/>
						</Grid>
						<Grid item xs={12}>
							<Controller
								name="time"
								control={control}
								render={({ field, fieldState }) => (
									<FormControl fullWidth disabled={!timeSlots?.length}>
										<InputLabel id="select-time">Time</InputLabel>
										<Select
											{...field}
											label="Time"
											labelId="select-time"
											error={fieldState.invalid}
											fullWidth
										>
											{timeSlots?.map(slot => (
												<MenuItem value="slot" key={slot}>{moment(slot, 'HH:mm').format('h:mm A')}</MenuItem>))}
										</Select>
										{fieldState.invalid && <FormHelperText error>{fieldState.error?.message}</FormHelperText>}
									</FormControl>
								)}
							/>
						</Grid>
						<Grid item xs={12}>
							<Controller
								name="people"
								control={control}
								render={({ field, fieldState }) => (
									<TextField
										label="Number of People"
										type="number"
										{...field}
										fullWidth
										error={fieldState.invalid}
										helperText={fieldState.error?.message}
									/>
								)}
							/>
						</Grid>
						<Grid item xs={12}>
							<Controller
								name="occasion"
								control={control}
								render={({ field, fieldState }) => (
									<TextField
										label="Occasion"
										{...field} fullWidth
										error={fieldState.invalid}
										helperText={fieldState.error?.message}/>
								)}
							/>
						</Grid>
						<Grid display={'flex'} item xs={12} justifyContent={'end'} gap={2}>
							<StyledButton type="reset" onClick={() => reset()} variant="outlined">
								Clear
							</StyledButton>
							<StyledButton type="submit" variant="contained">
								Submit
							</StyledButton>
						</Grid>
					</Grid>
				</form>
			</FormProvider>
			<Snackbar open={!!open?.data} autoHideDuration={4000} onClose={handleClose}>
				<Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
					{`${open?.data?.name}, thank you for reservation! `}
				</Alert>
			</Snackbar>
			<Snackbar open={!!open?.error} autoHideDuration={4000} onClose={handleClose}>
				<Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
					{open?.error}
				</Alert>
			</Snackbar>
		</BookingStyle>
	)
}

export default Booking
