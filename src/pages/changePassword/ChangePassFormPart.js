import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Button from '../../components/Button';
import FormField from '../../components/FormField';
import Input from '../../components/Input';
import { pages } from '../../constants/pages';
import strings from '../../constants/strings';
import { passwordReset } from '../../helpers/api';
import { showErrorNotification, showSuccessNotification } from '../../helpers/toast';
import { passwordFormat } from '../../helpers/userFields';

const ChangePassFormPart = () => {
	const { state } = useLocation();
	const navigate = useNavigate();
	const email = state?.email;
	const [confirmationCode, setConfirmationCode] = useState('');
	const [newPass, setNewPass] = useState('');
	const [confirmPass, setConfirmPass] = useState('');
	const [isSubmitting, setIsSubmitting] = useState(false);

	const changePassword = async () => {
		const res = await passwordReset(email, confirmationCode, newPass);
		if (res) {
			showSuccessNotification(strings.passChangedSuccessfully);
			navigate(pages.commonPages.login.path);
		}
	};

	const checkFields = () => {
		let errorMessage;
		if (!newPass || !confirmPass || !confirmationCode)
			errorMessage = strings.requiredError;
		else if (newPass !== confirmPass)
			errorMessage = strings.passwordsNotMatch;
		else if (!passwordFormat.test(newPass))
			errorMessage = strings.invalidPasswordError;

		if (errorMessage) {
			showErrorNotification(errorMessage);
			return false;
		}
		return true;
	};

	const handleChangePass = async () => {
		setIsSubmitting(true);
		if (checkFields()) await changePassword();
		setIsSubmitting(false);
	};

	return (<form>
		<h5 className='mt-1 mb-4 pb-1'>
			<b>{strings.changePass}</b>
		</h5>
		<p>
			<b>{strings.changePassInfo}</b>
		</p>
		<FormField
			divClass='form-outline mb-4'
			labelClass='form-label form-text'
			labelText={strings.confirmationCode}
			id=''>
			<Input
				placeholder={strings.confirmationCode}
				value={confirmationCode}
				onChange={(e) => setConfirmationCode(e.target.value)}
			/>
		</FormField>
		<FormField
			divClass='form-outline mb-4'
			labelClass='form-label form-text'
			labelText={strings.newPass}
			id='newPassword'>
			<Input
				type='password'
				id='newPassword'
				placeholder={strings.newPass}
				value={newPass}
				onChange={(e) => setNewPass(e.target.value)}
			/>
		</FormField>
		<FormField
			divClass='form-outline mb-4'
			labelClass='form-label form-text'
			labelText={strings.confirmPass}
			id='confirmPassword'>
			<Input
				type='password'
				id='confirmPassword'
				placeholder={strings.confirmPass}
				value={confirmPass}
				onChange={(e) => setConfirmPass(e.target.value)}
			/>
		</FormField>
		<div className='text-center pt-1 pb-1'>
			<Button
				className='btn-light btn-block fa-lg gradient-custom-2 mb-3'
				onClick={handleChangePass}
				disabled={isSubmitting}>
				{strings.changePass}
			</Button>
		</div>
	</form>);
};

export default ChangePassFormPart;
