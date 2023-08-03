import React from 'react';

import Button from '../../components/Button';
import FormField from '../../components/FormField';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import strings from '../../constants/strings';

const ContactFormPart = () => {
	return (
		<div className='form h-100'>
			<h3>{strings.aboutFormText}</h3>
			<form className='mb-5' method='post' id='contactForm' name='contactForm'>
				<div className='row'>
					<FormField
						divClass='col-md-6 form-group mb-5'
						labelClass='col-form-label form-text'
						labelText={strings.requiredName}
						id='ContactName'>
						<Input
							id='ContactName'
							type='text'
							name='name'
							placeholder={strings.name}
						/>
					</FormField>
					<FormField
						divClass='col-md-6 form-group mb-5'
						labelClass='col-form-label form-text'
						labelText={strings.requiredEmail}
						id='ContactEmail'>
						<Input
							id='ContactEmail'
							type='email'
							name='email'
							placeholder={strings.email}
						/>
					</FormField>
				</div>
				<div className='row'>
					<FormField
						divClass='col-md-6 form-group mb-5'
						labelClass='col-form-label form-text'
						labelText={strings.phone}
						id='ContactPhone'>
						<Input
							id='ContactPhone'
							type='tel'
							name='phone'
							placeholder={strings.phone}
						/>
					</FormField>
					<FormField
						divClass='col-md-6 form-group mb-5'
						labelClass='col-form-label form-text'
						labelText={strings.company}
						id='ContactCompany'>
						<Input
							id='ContactCompany'
							type='text'
							name='company'
							placeholder={strings.companyName}
						/>
					</FormField>
				</div>
				<div className='row'>
					<FormField
						divClass='col-md-12 form-group mb-5'
						labelClass='col-form-label form-text'
						labelText={strings.requiredMessage}
						id='ContactMessage'>
						<Textarea
							id='ContactMessage'
							name='message'
							cols='30'
							rows='4'
							placeholder={strings.yourMessage}
						/>
					</FormField>
				</div>
				<div className='row'>
					<div className='col-md-12 form-group'>
						<Button className='btn-secondary btn-frm rounded-0 py-2 px-4'>
							<span className='submitting' />
							{strings.sendMessage}
						</Button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default ContactFormPart;
