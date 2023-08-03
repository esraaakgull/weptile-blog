import React from 'react';

import socialMedia from '../../constants/socialMedia';
import strings from '../../constants/strings';

const SocialMediaMenuList = () => {
	return (
		<div className='card mb-4'>
			<div className='card-header'>{strings.socialMedia}</div>
			<div className='card-body'>
				<div className='row'>
					<ul className='list-unstyled mb-0'>
						{socialMedia?.map((item, index) => (
							<li key={`listItem${index}`}>
								<a href={item.link} target='_blank' className='listElement'>
									{item.title}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};
export default SocialMediaMenuList;
