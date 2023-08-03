import React from 'react';

import colors from '../../constants/colors';
import Company from './Company';
import CustomFormContainer from './CustomFormContainer';

const CustomContainer = ({ children }) => {
	return (
		<section className={`p-1 min-vh-100 ${colors.APP_BG}`}>
			<div className='container h-100'>
				<div className='row d-flex justify-content-center align-items-center h-100 pt-2 pb-2'>
					<div className='col-xl-12'>
						<div className='card rounded-5 text-black'>
							<div className='row g-0'>
								<Company />
								<CustomFormContainer>{children}</CustomFormContainer>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default CustomContainer;
