import React from 'react';

import Icon from '../../components/Icon';
import socialMedia from '../../constants/socialMedia';
import strings from '../../constants/strings';
import './footer.css';

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (<footer className='text-center text-white wb-bg pb-4'>
		<div className='container p-4'>
			<section className=' mt-3'>
				{socialMedia?.map((item, index) => (<a
					key={`socialMedia${index}`}
					className='btn btn-outline-light btn-floating m-1'
					href={item.link}
					target='_blank'
					rel='noreferrer'
					role='button'>
					<Icon family='fa-brands' name={item.icon} />
				</a>))}
			</section>
		</div>

		<div className='text-center'>
				<span className='text-white'>
					{strings.copyright} {currentYear}
					{strings.allRightReserved}
				</span>
		</div>
	</footer>);
};

export default Footer;
