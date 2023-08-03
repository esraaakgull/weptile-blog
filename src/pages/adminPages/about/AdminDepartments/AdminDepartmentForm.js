import FormField from '../../../../components/FormField';
import strings from '../../../../constants/strings';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import Icon from '../../../../components/Icon';
import React from 'react';

const AdminDepartmentForm = ({
								 departmentName,
								 setDepartmentName,
								 errorMessage,
								 setErrorMessage,
								 setDisplayDepartmentForm,
								 handleSubmit,
							 }) => {
	return (<div
		className='col-md-12 p-3 border rounded overflow-hidden flex-md-row mb-4 shadow-sm position-relative bg-white'>
		<div className='p-2'>
			<FormField labelClass='form-text' labelText={strings.departmentName}>
				<Input
					placeholder={strings.departmentName}
					className={errorMessage ? 'border-danger' : ''}
					value={departmentName}
					onChange={(e) => {
						setDepartmentName(e.target.value);
						setErrorMessage(null);
					}}
				/>
				{errorMessage && <span className='text-danger'> {errorMessage} </span>}
			</FormField>
		</div>
		<div className='p-2'>
			<div>
				<Button className='btn-danger me-1 icon' onClick={() => setDisplayDepartmentForm(false)}>
					<Icon name='fa-xmark' />
				</Button>
				<Button className='btn-success me-1 icon' onClick={handleSubmit}>
					<Icon name='fa-check' />
				</Button>
			</div>
		</div>
	</div>);
};

export default AdminDepartmentForm;
