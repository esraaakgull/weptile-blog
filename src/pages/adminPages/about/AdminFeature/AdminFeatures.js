import AdminFeatureForm from './AdminFeatureForm';
import AdminFeatureList from './AdminFeatureList';
import React from 'react';
import colors from '../../../../constants/colors';

const AdminFeatures = () => {
	return (<section className={`p-1 ${colors.APP_BG}`}>
		<div className='container mb-4'>
			<div className='row'>
				<AdminFeatureForm />
				<AdminFeatureList />
			</div>
		</div>
	</section>);
};

export default AdminFeatures;
