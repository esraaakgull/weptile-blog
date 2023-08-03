import React from 'react';

import Icon from '../../components/Icon';

const FeatureItem = ({ feature }) => {
	return (
		<div className='col-lg-4 col-sm-6'>
			<div className='service-item text-center pt-3 pb-2'>
				<Icon name={feature.icon} />
				<h4 className='pt-2 m-0 mb-2'>{feature.title}</h4>
				<p className='pt-1 m-0'>{feature.text}</p>
			</div>
		</div>
	);
};

export default FeatureItem;
