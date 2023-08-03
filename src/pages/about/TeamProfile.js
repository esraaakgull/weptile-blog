import React from 'react';

const TeamProfile = ({ employee }) => {
	return (<div className='col-sm-2 text-center'>
		<img
			className='rounded-circle pb-2 employeePic'
			alt=''
			src={employee.imageUrl}
			data-holder-rendered='true'
		/>
		<div className='card-body'>
			<h5>{`${employee.acf.first_name}  ${employee.acf.last_name}`}</h5>
			<p><small>{employee.departmentName}</small></p>
		</div>
	</div>);
};

export default TeamProfile;
