import React, { useContext, useEffect, useState } from 'react';

import Button from '../components/Button';
import FormField from '../components/FormField';
import Input from '../components/Input';
import colors from '../constants/colors';
import strings from '../constants/strings';
import UserContext from '../contexts/userContext';
import { updateUser } from '../helpers/api';
import { showSuccessNotification } from '../helpers/toast';
import LoaderBar from '../components/LoaderBar';

const Profile = () => {
	const userContext = useContext(UserContext);
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [userName, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [avatar, setAvatar] = useState(null);
	const [interestedCategoriesTags, setInterestedCategoriesTags] = useState('');
	const [isSubmitting, setIsSubmitting] = useState(false);
	const updateUserData = async () => {
		setIsSubmitting(true);
		const res = await updateUser(firstName, lastName);
		if (res) {
			await userContext.getUserInfo();
			const { first_name, last_name } = userContext.user;
			setFirstName(first_name);
			setLastName(last_name);
			showSuccessNotification(strings.userDataChangedSuccessfully);
		}
		setIsSubmitting(false);
	};

	const getUserData = () => {
		const { user } = userContext;
		if (user) {
			const { first_name, last_name, username, email, avatar_urls } = userContext.user;
			setFirstName(first_name);
			setLastName(last_name);
			setUserName(username);
			setEmail(email);
			setAvatar(avatar_urls[Object.keys(avatar_urls)[2]]);
		}
	};

	useEffect(() => {
		getUserData();
	}, []);

	if (isSubmitting) return <LoaderBar message={strings.requestInProgress} />;
	return (<section className={`p-1 min-vh-100 ${colors.APP_BG}`}>
		<div className='container'>
			<div className='row'>
				<div className='col-md-5 p-3'>
					<h5>{strings.profile}</h5>
				</div>
			</div>
			<div className='row'>
				<div className='col-md-3'>
					<div className='d-flex justify-content-center align-items-center'>
						<img
							src={avatar}
							id='avatar'
							alt=''
							className='profileAvatar rounded-circle'
						/>
					</div>
					<div className='p-2 text-center'>
						<b>
							<a
								href='https://en.gravatar.com/'
								className='orangeText'
								target='_blank'>
								Change Avatar
							</a>
						</b>
					</div>
				</div>
				<div className='col-md-9 ps-5'>
					<div className='row'>
						<FormField
							divClass='form-outline col-md-4 mb-4'
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
							divClass='form-outline col-md-4 mb-4'
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
					<div className='row'>
						<FormField
							divClass='form-outline col-md-4 mb-4'
							labelText={strings.username}
							labelClass='form-label form-text'
							id='signupUsername'>
							<Input
								id='signupUsername'
								value={userName}
								placeholder={strings.username}
								disabled
								className='text-secondary'
							/>
						</FormField>
						<FormField
							divClass='form-outline col-md-4 mb-4'
							labelText={strings.email}
							labelClass='form-label form-text'
							id='signupUserEmail'>
							<Input
								id='signupUserEmail'
								value={email}
								placeholder={strings.email}
								disabled
								className='text-secondary'
							/>
						</FormField>
					</div>
					<FormField
						divClass='form-outline col-md-4 mb-4'
						labelClass='form-label form-text'
						labelText={strings.interestedCategories}
						id='signupUsername'>
						<Input
							id='signupUsername'
							value={interestedCategoriesTags}
							placeholder={strings.interestedCategories}
							onChange={(e) => setInterestedCategoriesTags(e.target.value)}
						/>
					</FormField>
					<Button className='profileSaveButton mb-3' onClick={updateUserData}>
						{strings.save}
					</Button>
				</div>
			</div>
		</div>
	</section>);
};
export default Profile;
