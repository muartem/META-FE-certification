import * as yup from 'yup'

export const defaultValues = {
	name: '',
	date: '',
	time: '',
	people: 0,
	occasion: '',
}

export const validationSchema =
	yup.object().shape({
		name: yup.string().required('Type name').max(32),
		date: yup.date().min(new Date((new Date()).setHours(0, 0, 0, 0)), 'Date can`t be in the past').required('Choose date'),
		time: yup.string().required('Choose time').min(4).max(9),
		people: yup.number().min(1).max(8, 'For 9 and more call us...').required('How many people?'),
		occasion: yup.string(),
	})
