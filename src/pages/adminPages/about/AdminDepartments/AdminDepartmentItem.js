import Button from '../../../../components/Button';
import strings from '../../../../constants/strings';
import Icon from '../../../../components/Icon';
import React from 'react';

const AdminDepartmentItem = ({ department, setDepartmentToBeUpdated, handleDelete }) => {
	return (<div
		className='col-md-12 mb-1 align-items-center border rounded overflow-hidden flex-md-row  shadow-sm h-md-250 position-relative bg-white'>
		<div className='row p-2 align-items-center'>
			<div className='col m-1 d-flex justify-content-start'>
				<label> {department.name}</label>
			</div>
			<div className='col d-flex justify-content-end'>
				<Button
					className='btn-danger me-1 icon'
					onClick={() => handleDelete(department.id)}
					title={strings.delete}>
					<Icon name='fa-xmark' />
				</Button>
				<Button
					className='btn-warning me-1 icon'
					onClick={() => setDepartmentToBeUpdated(department)}
					title={strings.edit}>
					<Icon name='fa-pen' />
				</Button>
			</div>
		</div>
	</div>);
};
export default AdminDepartmentItem;
