import strings from '../../../../constants/strings';
import React from 'react';
import AdminDepartmentItem from './AdminDepartmentItem';

const AdminDepartmentList = ({ departments, setDepartmentToBeUpdated, handleDelete }) => {
	const reversedOrderDepartments = departments?.sort((a, b) => b.id - a.id);

	return (<div className='col-md-6'>
		<div className='row pt-2 pb-2'>
			<div className='col-md-6'>
				<h4>{strings.departmentList}</h4>
			</div>
		</div>
		{reversedOrderDepartments?.map((department) => (<AdminDepartmentItem
			key={`departmentItem${department.id}`}
			department={department}
			setDepartmentToBeUpdated={setDepartmentToBeUpdated}
			handleDelete={handleDelete}
		/>))}
	</div>);
};

export default AdminDepartmentList;
