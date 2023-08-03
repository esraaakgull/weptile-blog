import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button';
import FormField from '../../components/FormField';
import Input from '../../components/Input';
import { pages } from '../../constants/pages';
import strings from '../../constants/strings';
import { passwordResetRequest } from '../../helpers/api';
import { showErrorNotification, showInfoNotification } from '../../helpers/toast';

const ForgotPassFormPart = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [isSubmitting, setIsSubmitting] = useState(false);

	const sendPasswordResetRequest = async () => {
		const res = await passwordResetRequest(email);
		if (res) {
			showInfoNotification(strings.checkYourEmail);
			navigate(pages.commonPages.changePass.path, { state: { email: email } });
		}
	};

	const handleForgotPass = async () => {
		setIsSubmitting(true);
		if (!email) {
			showErrorNotification(strings.requiredError);
			setIsSubmitting(false);
			return;
		}
		await sendPasswordResetRequest();
		setIsSubmitting(false);

	};

	return (
		<form>
			<h5 className='mt-1 mb-4 pb-1'>
				<b>{strings.forgotPass}</b>
			</h5>
			<p>
				<b>{strings.forgotPassInfo}</b>
			</p>
			<FormField
				divClass='form-outline mb-4'
				labelClass='form-label form-text'
				labelText={strings.email}
				id='forgotPassEmail'>
				<Input
					type='email'
					id='forgotPassEmail'
					placeholder={strings.email}
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</FormField>
			<div className='text-center pt-1 pb-1'>
				<Button
					className='btn-light btn-block fa-lg gradient-custom-2 mb-3'
					onClick={handleForgotPass}
					disabled={isSubmitting}>
					{strings.passResetEmail}
				</Button>
			</div>
		</form>
	);
};

export default ForgotPassFormPart;
