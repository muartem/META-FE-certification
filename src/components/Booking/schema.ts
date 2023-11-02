import * as yup from 'yup'

export const defaultValues = {
	name: '',
	phone: '',
	date: '',
	time: '',
	people: 0,
	occasion: '',
}

const phoneRegExp = /^(?:\+\d{1,4}\s?)?(\(\d{1,4}\)\s?)?[\d\s-]+$/

export const validationSchema =
	yup.object().shape({
		name: yup.string().required('Type name').max(32),
		phone: yup.string().required('Type phone number').matches(phoneRegExp, 'Phone number is not valid'),
		date: yup.date().min(new Date((new Date())
			.setHours(0, 0, 0, 0)), 'Date can`t be in the past').required('Choose date'),
		time: yup.string().required('Choose time').min(4).max(9),
		people: yup.number().min(1).max(8, 'For 9 or more call us...').required('How many people?'),
		occasion: yup.string(),
	})
