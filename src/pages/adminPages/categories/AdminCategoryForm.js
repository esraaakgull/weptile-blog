import React from 'react';

import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import Icon from '../../../components/Icon';
import Input from '../../../components/Input';
import strings from '../../../constants/strings';

const AdminCategoryForm = ({
							   categoryName,
							   setCategoryName,
							   errorMessage,
							   setErrorMessage,
							   setDisplayCategoryForm,
							   handleSubmit,
						   }) => {
	return (<div
		className='col-md-12 p-3 border rounded overflow-hidden flex-md-row mb-4 shadow-sm position-relative bg-white'>
		<div className='p-2'>
			<FormField labelClass='form-text' labelText={strings.categoryName}>
				<Input
					placeholder={strings.categoryName}
					className={errorMessage ? 'border-danger' : ''}
					value={categoryName}
					onChange={(e) => {
						setCategoryName(e.target.value);
						setErrorMessage(null);
					}}
				/>
				{errorMessage && <span className='text-danger'> {errorMessage} </span>}
			</FormField>
		</div>
		<div className='p-2'>
			<div>
				<Button className='btn-danger me-1 icon' onClick={() => setDisplayCategoryForm(false)}>
					<Icon name='fa-xmark' />
				</Button>
				<Button className='btn-success me-1 icon' onClick={handleSubmit}>
					<Icon name='fa-check' />
				</Button>
			</div>
		</div>
	</div>);
};

export default AdminCategoryForm;
