import React from 'react';

import colors from '../../../constants/colors';
// import AdminFeatures from './AdminFeature/AdminFeatures';
// import AdminAboutUsForm from './AdminAboutUsForm';
import AdminDepartments from './AdminDepartments/AdminDepartments';
import AdminEmployees from './AdminEmployees/AdminEmployees';

const AdminAbout = () => {
	return (<section className={`${colors.APP_BG}`}>
		{/*<AdminAboutUsForm />*/}
		{/*<hr className='container' />*/}
		{/*<AdminFeatures />*/}
		<AdminDepartments />
		<hr className='container' />
		<AdminEmployees />
	</section>);
};
export default AdminAbout;
