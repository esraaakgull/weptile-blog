import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import FormField from '../../components/FormField';
import Input from '../../components/Input';
import strings from '../../constants/strings';
import UserContext from '../../contexts/userContext';
import { showErrorNotification } from '../../helpers/toast';

const LoginFormPart = () => {
	const userContext = useContext(UserContext);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [username, setUsername] = useState('');
	const [pass, setPass] = useState('');

	const handleSubmit = async () => {
		setIsSubmitting(true);
		if (!username || !pass) {
			showErrorNotification(strings.requiredError);
			setIsSubmitting(false);
			return;
		}
		await userContext.login(username, pass);
		setIsSubmitting(false);
	};

	return (
		<>
			<p>{strings.loginToAccText}</p>
			<FormField
				divClass='form-outline mb-4'
				labelClass='form-label form-text'
				labelText={strings.username}
				id='loginUsername'>
				<Input
					id='username'
					name='username'
					value={username}
					placeholder={strings.username}
					onChange={(e) => setUsername(e.target.value)}
					disabled={isSubmitting}
				/>
			</FormField>
			<FormField
				divClass='form-outline mb-4'
				labelClass='form-label form-text'
				labelText={strings.password}
				id='password'>
				<Input
					id='password'
					type='password'
					name='password'
					value={pass}
					placeholder={strings.password}
					onChange={(e) => setPass(e.target.value)}
					disabled={isSubmitting}
				/>
			</FormField>
			<div className='text-center pt-1 pb-1'>
				<Button
					onClick={handleSubmit}
					className='btn-light btn-block fa-lg gradient-custom-2 mb-3'
					id='login'
					disabled={isSubmitting}>
					{strings.login}
				</Button>
			</div>
			<div className='text-center pt-1 pb-1'>
				<Link to='/forgotPass'>
					<p className='text-muted'>{strings.forgotPass}</p>
				</Link>
			</div>
			<div className='d-flex align-items-center justify-content-center pb-4'>
				<p className='mb-0 me-2'>{strings.loginAccountAsking}</p>
				<Link to='/signup'>
					<Button className='btn-outline-secondary' id='create'>
						{strings.loginCreateAccButtonText}
					</Button>
				</Link>
			</div>
		</>
	);
};

export default LoginFormPart;
