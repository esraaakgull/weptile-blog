import React from 'react';

import strings from '../../constants/strings';

const Company = () => {
	return (
		<div className='col-lg-6 d-flex align-items-center gradient-custom-2'>
			<div className='text-white px-3 py-4 p-md-5 mx-md-4'>
				<h4 className='mb-4'>{strings.weptileCompanyContentTitle}</h4>
				<p className='small mb-0'>{strings.weptileCompanyContentText}</p>
			</div>
		</div>
	);
};
export default Company;
