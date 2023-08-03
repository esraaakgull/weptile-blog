import React from 'react';

import Button from '../../../../components/Button';
import Icon from '../../../../components/Icon';
import colors from '../../../../constants/colors';
import strings from '../../../../constants/strings';

const AdminFeatureItem = ({ feature }) => {
	return (
		<div className='col-md-12 mb-1 border rounded overflow-hidden flex-md-row  shadow-sm h-md-250 position-relative bg-white'>
			<div className='row p-2'>
				<div className='col-md-12'>
					<Icon name={feature.icon} color={colors.ICON_COLOR_FEATURE} />
					<span className='form-text ms-2'>{feature.title}</span>
				</div>
			</div>
			<div className='row p-2'>
				<div className='col-md-12 '>
					<p>{feature.text}</p>
				</div>
			</div>
			<div className='row p-2'>
				<div className='col-md-12 d-flex justify-content-start'>
					<Button className='btn-danger me-1 icon' title={strings.delete}>
						<Icon name='fa-xmark' />
					</Button>
					<Button className='btn-warning me-1 icon' title={strings.edit}>
						<Icon name='fa-check' />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default AdminFeatureItem;
