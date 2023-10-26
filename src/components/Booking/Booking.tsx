import { yupResolver } from '@hookform/resolvers/yup'
import { TextField, Select, MenuItem, FormHelperText } from '@mui/material'
import Grid from '@mui/material/Grid'
import moment from 'moment'
import { FC, useEffect, useState } from 'react'
import * as React from 'react'
import { FormProvider, useForm, Controller, useWatch } from 'react-hook-form'
import { fetchAPI, submitAPI } from '../../services/api'
import { BookingStyle, StyledButton } from './Booking.style'
import { defaultValues, validationSchema } from './schema'


const Booking: FC = () => {
	const [timeSlots, setTimeSlots] = useState(null)
	const form = useForm({
		resolver: yupResolver(validationSchema),
		defaultValues,
	})

	const {
		control, handleSubmit, reset,
	} = form

	const selectedDate = useWatch({ control, name: 'date' })

	const onSubmit = async (data) => {
		try {
			const res = await submitAPI(data)

			console.log(res)
			reset()
		} catch (e) {
			console.error(e)
		} finally {
			console.log(data)
		}
	}

	const getTimeSlots = async (date: string) => {
		console.log(date)
		try {
			const res = await fetchAPI(new Date(date))
			setTimeSlots(res)
		} catch (e) {
			console.error(e)
		}
	}

	useEffect(() => {
		getTimeSlots(selectedDate)
	}, [selectedDate])

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
								name="date"
								control={control}
								render={({ field, fieldState }) => (
									<TextField
										label="Date"
										type="date"
										{...field}
										fullWidth
										error={fieldState.invalid}
										helperText={fieldState.error?.message} placeholder=""/>
								)}
							/>
						</Grid>
						<Grid item xs={12}>
							<Controller
								name="time"
								control={control}
								render={({ field, fieldState }) => (
									<>
										<Select
											{...field}
											label="Time"
											error={fieldState.invalid}
											disabled={!timeSlots}
											fullWidth
										>
											{timeSlots?.map(slot => (
												<MenuItem value="slot" key={slot}>{moment(slot, 'HH:mm').format('h:mm A')}</MenuItem>))}
										</Select>
										{fieldState.invalid && <FormHelperText error>{fieldState.error?.message}</FormHelperText>}
									</>
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
							<StyledButton type="reset" onClick={reset} variant="outlined">
								Clear
							</StyledButton>
							<StyledButton type="submit" variant="contained">
								Submit
							</StyledButton>
						</Grid>
					</Grid>
				</form>
			</FormProvider>
		</BookingStyle>
	)
}

export default Booking
