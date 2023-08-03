import React from 'react';

import aboutFeatureItemList from '../../../../constants/aboutFeatureItemList';
import strings from '../../../../constants/strings';
import AdminFeatureItem from './AdminFeatureItem';

const AdminFeatureList = () => {
	return (
		<div className='col-md-6'>
			<div className='row pt-2 pb-2'>
				<div className='col-md-6'>
					<h4>{strings.featureList}</h4>
				</div>
			</div>
			{aboutFeatureItemList?.map((item, index) => (
				<AdminFeatureItem feature={item} key={`aboutFeatureItem${index}`} />
			))}
		</div>
	);
};
export default AdminFeatureList;
