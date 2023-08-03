import React from 'react';

import Button from '../../../../components/Button';
import Icon from '../../../../components/Icon';
import strings from '../../../../constants/strings';
import noImage from '../../../../assets/images/noImage.png';

const AdminEmployeeItem = ({ employee, setEmployeeToBeUpdated, handleDelete }) => {
	const image = employee.imageUrl ? employee.imageUrl : noImage;

	return (<div
		className='col-md-12 mb-1 border rounded overflow-hidden flex-md-row  shadow-sm h-md-250 position-relative bg-white'>
		<div className='row p-2 align-items-center'>
			<div className='col-md-3'>
				<img className='rounded-circle employeePic' alt='' src={image} />
			</div>
			<div className='col-md-5 ps-4'>
				<h3>{`${employee.acf.first_name}  ${employee.acf.last_name}`}</h3>
				<h6>{employee.departmentName}</h6>
			</div>
			<div className='col-md-4 d-flex justify-content-end'>
				<Button className='btn-danger me-1 icon' title={strings.delete}
						onClick={() => handleDelete(employee.id)}>
					<Icon name='fa-xmark' />
				</Button>
				<Button className='btn-warning me-1 icon' title={strings.edit}
						onClick={() => setEmployeeToBeUpdated(employee)}>
					<Icon name='fa-pen' />
				</Button>
			</div>
		</div>
	</div>);
};

export default AdminEmployeeItem;
