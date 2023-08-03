import React, { useContext, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';

import Button from '../../components/Button';
import FormField from '../../components/FormField';
import Input from '../../components/Input';
import strings from '../../constants/strings';
import UserContext from '../../contexts/userContext';
import { addUser } from '../../helpers/api';
import { showErrorNotification, showSuccessNotification } from '../../helpers/toast';
import { mailFormat, passwordFormat } from '../../helpers/userFields';

const SignUpFormPart = () => {
	const userContext = useContext(UserContext);
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');
	const [isSubmitting, setIsSubmitting] = useState(false);

	const createUser = async () => {
		setIsSubmitting(true);
		const res = await addUser(firstName, lastName, username, email, pass);
		if (res) {
			showSuccessNotification(strings.userCreatedSuccessfully);
			await userContext.login(username, pass);
		}
		setIsSubmitting(false);
	};

	const checkFields = () => {
		let errorMessage;
		if (!email || !pass || !username)
			errorMessage = strings.requiredError;
		else if (!passwordFormat.test(pass))
			errorMessage = strings.invalidPasswordError;
		else if (!mailFormat.test(email))
			errorMessage = strings.invalidEmailError;

		if (errorMessage) {
			showErrorNotification(errorMessage);
			return false;
		}
		return true;
	};

	const handleSignup = () => {
		if (checkFields()) createUser();
	};

	return (<>
		<h5 className='mt-1 mb-4 pb-1'>
			<b>{strings.signUp}</b>
		</h5>
		<div className='row'>
			<FormField
				divClass='form-outline col-md-6 mb-4'
				labelClass='form-label form-text'
				labelText={strings.firstName}
				id='signupFirstName'>
				<Input
					id='signupFirstName'
					value={firstName}
					placeholder={strings.firstName}
					onChange={(e) => setFirstName(e.target.value)}
				/>
			</FormField>
			<FormField
				divClass='form-outline col-md-6 mb-4'
				labelClass='form-label form-text'
				labelText={strings.lastName}
				id='signupLastName'>
				<Input
					id='signupLastName'
					value={lastName}
					placeholder={strings.lastName}
					onChange={(e) => setLastName(e.target.value)}
				/>
			</FormField>
		</div>
		<FormField
			divClass='form-outline mb-4'
			labelClass='form-label form-text'
			labelText={strings.requiredUsername}
			id='signupUsername'>
			<Input
				id='signupUsername'
				value={username}
				placeholder={strings.username}
				onChange={(e) => setUsername(e.target.value)}
			/>
		</FormField>
		<FormField
			divClass='form-outline mb-4'
			labelClass='form-label form-text'
			labelText={strings.requiredEmail}
			id='signupEmail'>
			<Input
				id='signupEmail'
				value={email}
				placeholder={strings.email}
				onChange={(e) => setEmail(e.target.value)}
			/>
		</FormField>
		<FormField
			divClass='form-outline mb-4'
			labelClass='form-label form-text'
			labelText={strings.requiredPassword}
			id='signupPassword'>
			<Input
				id='signupPassword'
				type='password'
				value={pass}
				placeholder={strings.password}
				onChange={(e) => setPass(e.target.value)}
			/>
		</FormField>
		<div className='text-center pt-1 pb-1'>
			<Button
				className='btn-light gradient-custom-2 mb-3'
				onClick={handleSignup}
				disabled={isSubmitting}>
				{strings.signUp}
			</Button>
		</div>
	</>);
};
export default SignUpFormPart;
