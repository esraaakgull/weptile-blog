import React from 'react';

import Button from '../../../../components/Button';
import FilePicker from '../../../../components/FilePicker';
import FormField from '../../../../components/FormField';
import Icon from '../../../../components/Icon';
import Input from '../../../../components/Input';
import strings from '../../../../constants/strings';
import Select from '../../../../components/Select';
import noImage from '../../../../assets/images/noImage.png';

const AdminEmployeeForm = ({
						   departments,
						   firstName,
						   setFirstName,
						   lastName,
						   setLastName,
						   department,
						   setDepartment,
						   imageUrl,
						   setImageUrl,
						   setPickedImage,
						   checked,
						   handleSubmit,
						   displayEmployeeForm,
						   setDisplayEmployeeForm,
					   }) => {
	return displayEmployeeForm && (<div
		className='col-md-12 p-3 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative bg-white'>
		<div className='row align-items-center'>
			<div className='col-md-4'>
				<img className='rounded-circle employeePic' src={imageUrl} alt='' />
			</div>
			<div className='d-flex align-items-center p-2'>
				<Button
					className='btn-danger me-1 icon'
					title={strings.delete}
					onClick={() => {
						setPickedImage(null);
						setImageUrl(noImage);
					}}>
					<Icon name='fa-xmark' />
				</Button>
				<FilePicker
					buttonTitle={strings.uploadPhoto}
					setPickedImage={setPickedImage}
					setImageUrl={setImageUrl}
				/>
			</div>
		</div>
		<div className='row pt-3'>
			<FormField labelClass='form-text' labelText={strings.requiredFirstName} divClass='col-md-6'>
				<Input type='text'
					   placeholder={strings.firstName}
					   value={firstName}
					   className={checked && !firstName ? 'border-danger' : ''}
					   onChange={(e) => setFirstName(e.target.value)} />
				{checked && !firstName && (<span className='text-danger'>{strings.specificRequiredError}</span>)}
			</FormField>
			<FormField labelClass='form-text' labelText={strings.lastName} divClass='col-md-6'>
				<Input type='text' placeholder={strings.lastName} value={lastName}
					   onChange={(e) => setLastName(e.target.value)} />
			</FormField>
		</div>
		<div className='row pt-3'>
			<FormField labelClass='form-text' labelText={strings.department} divClass='col-md-6'>
				<Select
					name='departments'
					value={department}
					options={departments}
					onChange={(e) => setDepartment(e.target.value)}
					className='form-select form-select mb-3'
				/>
			</FormField>
		</div>
		<div className='row pt-2'>
			<div>
				<Button className='btn-danger me-1 icon' title={strings.close}
						onClick={() => setDisplayEmployeeForm(false)}>
					<Icon name='fa-xmark' />
				</Button>
				<Button className='btn-success me-1 icon' title={strings.save}
						onClick={handleSubmit}>
					<Icon name='fa-check' />
				</Button>
			</div>
		</div>
	</div>);
};
export default AdminEmployeeForm;
