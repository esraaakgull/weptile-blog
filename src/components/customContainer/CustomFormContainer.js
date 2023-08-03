import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo_weptile.png';
import { pages } from '../../constants/pages';
import strings from '../../constants/strings';

const CustomFormContainer = ({ children }) => {
	return (
		<div className='col-lg-6'>
			<div className='card-body p-md-5 mx-md-4'>
				<div className='text-center'>
					<Link to={pages.commonPages.main.path}>
						<img src={logo} alt='logo' />
					</Link>
					<h4 className='mt-2 mb-5 pb-1'>{strings.weptileText}</h4>
				</div>
				{children}
			</div>
		</div>
	);
};
export default CustomFormContainer;
