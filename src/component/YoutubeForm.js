import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues =  {
    name: 'Aryan',
    email: '',
    channel: '',
}

const onSubmit = values => {
    console.log('Form data', values);
}

const validationSchema = Yup.object({
	name: Yup.string().required('Required'),
	email: Yup.string().email('Invalid email Format').required('Required'),
	channel: Yup.string().required('Required')
})

function YoutubeForm() {
    
    // console.log('Form errors',formik.errors)
	// console.log('Form values', formik.values);
	
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}>
			<Form>
				<div className='form-control'>
				<label htmlFor="name">Name </label>
				<Field
					type="text"
					id="name"
					name="name"
				/>
				<ErrorMessage name='name' />
				</div>
                {/* {formik.errors.name ? <div>{formik.errors.name}</div> : null} */}
				<div className='form-control'>
				<label htmlFor="email"> E-mail </label>
				<Field
					type="email"
					id="email"
					name="email"
				/>
				<ErrorMessage name='email' />
				</div>
                {/* {formik.errors.email ? <div>{formik.errors.email}</div> : null} */}
				<div className='form-control'>
				<label htmlFor="channel">Channel</label>
				<Field
					type="text"
					id="channel"
					name="channel"					
				/>
				<ErrorMessage name='channel' />
				</div>
                {/* {formik.errors.channel ? <div>{formik.errors.channel}</div> : null} */}

				<button type="Submit">Submit</button>
			</Form>
		</Formik>
	);
}

export default YoutubeForm;