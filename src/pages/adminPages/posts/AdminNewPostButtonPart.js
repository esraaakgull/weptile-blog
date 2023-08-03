import React from 'react';

import Button from '../../../components/Button';
import strings from '../../../constants/strings';

const AdminNewPostButtonPart = ({ handleNewPostForm }) => {
	return (
		<div className='row'>
			<div className='col-md-4 p-3'>
				<Button className='btn-outline-info me-1' onClick={handleNewPostForm}>
					{strings.addNewPost}
				</Button>
			</div>
		</div>
	);
};

export default AdminNewPostButtonPart;
