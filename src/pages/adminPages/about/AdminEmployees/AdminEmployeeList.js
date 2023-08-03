import React from 'react';

import strings from '../../../../constants/strings';
import AdminEmployeeItem from './AdminEmployeeItem';

const AdminEmployeeList = ({ employees, setEmployeeToBeUpdated, handleDelete }) => {
	return (<div className='col-md-6'>
		<div className='row pt-2 pb-2'>
			<div className='col-md-6'>
				<h4>{strings.teamList}</h4>
			</div>
		</div>
		{employees?.map((employee) => (
			<AdminEmployeeItem
				key={`aboutTeamItem${employee.id}`}
				employee={employee}
				setEmployeeToBeUpdated={setEmployeeToBeUpdated}
				handleDelete={handleDelete} />))}
	</div>);
};

export default AdminEmployeeList;
