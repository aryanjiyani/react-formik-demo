import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const initialValues =  {
    name: '',
    email: '',
    channel: '',
}

const onSubmit = values => {
    console.log('Form data', values);
}

// const validate = values => {
//     let errors = {};
//     if (!values.name) {
//         errors.name = 'Required';
//     }

//     if (!values.email) {
//         errors.email = 'Required';
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
//         errors.email = 'invalid email formate';

//     if (!values.channel) {
//         errors.channel = 'Required';
//     }
//     return errors
// }

const validationSchema = Yup.object({
	name: Yup.string().required('Required'),
	email: Yup.string().email('Invalid email Format').required('Required'),
	channel: Yup.string().required('Required')
})

function OldYoutubeForm() {
    const formik = useFormik({
        initialValues ,
		onSubmit ,
		validationSchema 
		// validate
	})
    
    console.log('Form errors',formik.errors)
	// console.log('Form values', formik.values);

	return (
		<div>
			<form onSubmit={formik.handleSubmit}>
				<label htmlFor="name">Name </label>
				<input
					type="text"
					id="name"
					name="name"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.name}
				/>
                {formik.errors.name ? <div>{formik.errors.name}</div> : null}

				<label htmlFor="email"> E-mail </label>
				<input
					type="email"
					id="email"
					name="email"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.email}
				/>
                {formik.errors.email ? <div>{formik.errors.email}</div> : null}

				<label htmlFor="channel">Channel</label>
				<input
					type="text"
					id="channel"
					name="channel"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.channel}
				/>
                {formik.errors.channel ? <div>{formik.errors.channel}</div> : null}

				<button type="Submit">Submit</button>
			</form>
		</div>
	);
}

export default OldYoutubeForm;