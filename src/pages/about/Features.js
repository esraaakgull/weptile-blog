import React from 'react';

import aboutFeatureItemList from '../../constants/aboutFeatureItemList';
import strings from '../../constants/strings';
import FeatureItem from './FeatureItem';

const Features = () => {
	return (
		<section className='about-feature section colorful-service'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-12'>
						<div className='title'>
							<h2 className='pt-2 pb-4'>{strings.weAre}</h2>
						</div>
					</div>
				</div>
				<div className='row'>
					{aboutFeatureItemList?.map((item, index) => (
						<FeatureItem feature={item} key={`aboutFeatureItem${index}`} />
					))}
				</div>
			</div>
		</section>
	);
};
export default Features;
