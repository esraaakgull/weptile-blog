import colors from '../constants/colors';
import React from 'react';
import strings from '../constants/strings';

const Settings = () => {
	return (
		<section className={`p-1 min-vh-100 ${colors.APP_BG}`}>
			<div className='container'>
				<div className='row'>
					<div className='col-md-5 p-3'>
						<h5>{strings.settings.toUpperCase()}</h5>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Settings;
