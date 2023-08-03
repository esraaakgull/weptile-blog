import React from 'react';

import strings from '../../../constants/strings';
import AdminCategoryItem from './AdminCategoryItem';

const AdminCategoryList = ({ categories, setCategoryToBeUpdated, handleDelete }) => {
	const reversedOrderCategories = categories?.sort((a, b) => b.id - a.id);

	return (<div className='col-md-6'>
		<div className='row pt-2 pb-2'>
			<div className='col-md-6'>
				<h4>{strings.categoryList}</h4>
			</div>
		</div>
		{reversedOrderCategories?.map((category) => (<AdminCategoryItem
			key={`categoryItem${category.id}`}
			category={category}
			setCategoryToBeUpdated={setCategoryToBeUpdated}
			handleDelete={handleDelete}
		/>))}
	</div>);
};
export default AdminCategoryList;
