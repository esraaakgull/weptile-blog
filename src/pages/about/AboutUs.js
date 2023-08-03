import React from 'react';

import growTogetherPic from '../../assets/images/growTogether.jpg';
import colors from '../../constants/colors';
import strings from '../../constants/strings';

const AboutUs = () => {
	return (
		<section className={`section ${colors.APP_BG}`}>
			<div className='container'>
				<div className='row'>
					<div className='col-md-7'>
						<div className='section-title mb-0'>
							<h2>{strings.aboutUs}</h2>
							<p className='pt-2 lh-lg'>{strings.aboutUsContentTitle}</p>
						</div>
						<p>{strings.aboutUsContentText}</p>
					</div>
					<div className='col-md-5'>
						<div>
							<img src={growTogetherPic} alt='img' className='w-100' />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
