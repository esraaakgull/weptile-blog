import Button from '../../../../components/Button';
import strings from '../../../../constants/strings';
import React from 'react';

const AdminNewDepartment = ({ handleNewDepartmentForm }) => {
	return (<div className='row'>
		<div className='col-md-5 p-3'>
			<Button className='btn-outline-info me-1' onClick={handleNewDepartmentForm}>
				{strings.addNewDepartment}
			</Button>
		</div>
	</div>);
};

export default AdminNewDepartment;
