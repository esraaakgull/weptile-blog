import React from 'react';

import colors from '../../constants/colors';
import ContactFormPart from './ContactFormPart';
import ContactMapPart from './ContactMapPart';

const Contact = () => {
	return (
		<section className={`min-vh-100  ${colors.APP_BG}`}>
			<div className='content p-5 '>
				<div className='container'>
					<div className='row align-items-stretch'>
						<div className='col-md-6'>
							<ContactFormPart />
						</div>
						<div className='col-md-6'>
							<ContactMapPart />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
