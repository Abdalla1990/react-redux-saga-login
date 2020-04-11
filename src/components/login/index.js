import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import FormikField from '../FormikField';

import { loginRequest, loginOut } from '../../actions/login/loginActions';

const initialValues = {
	email: 'eve.holt@reqres.in',
	password: '',
};

const LoginSchema = Yup.object().shape({
	email: Yup.string()
		.lowercase()
		.email('Must be a valid email!')
		.required('Required'),
	password: Yup.string()
		.min(4, 'Min 4 characters required!')
		.required('Required'),
});

const Login = (props) => {
	console.log('props :', props);
	const submit = (values = initialValues) => {
		debugger;
		props.loginRequest(values);
	};

	return (
		<Container maxWidth='sm'>
			<div>
				<h1>Sign In</h1>
				cityslicka
				<Formik
					initialValues={initialValues}
					onSubmit={submit}
					validationSchema={LoginSchema}>
					{({ dirty, isValid }) => {
						return (
							<Form>
								<FormikField name='email' label='Email' required />
								<FormikField
									name='password'
									label='Password'
									type='password'
									required
								/>
								<Button
									variant='contained'
									color='primary'
									disabled={!dirty || !isValid}
									type='submit'>
									Login
								</Button>
							</Form>
						);
					}}
				</Formik>
			</div>
		</Container>
	);
};

export default connect(null, { loginRequest, loginOut })(Login);
