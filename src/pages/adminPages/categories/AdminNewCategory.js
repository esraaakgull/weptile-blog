import React from 'react';

import Button from '../../../components/Button';
import strings from '../../../constants/strings';

const AdminNewCategory = ({ handleNewCategoryForm }) => {
	return (<div className='row'>
		<div className='col-md-5 p-3'>
			<Button className='btn-outline-info me-1' onClick={handleNewCategoryForm}>
				{strings.addNewCategory}
			</Button>
		</div>
	</div>);
};
export default AdminNewCategory;
