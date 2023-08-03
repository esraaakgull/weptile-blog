import React from 'react';
import { useNavigate } from 'react-router-dom';

import { pages } from '../../constants/pages';

const CategoryMenuListItem = ({ category }) => {
	const navigate = useNavigate();
	const path = pages.userPages.categories.path;

	return (
		<li>
			<span className='listElement' onClick={() => navigate(path, { state: { id: category.id } })}>
				{category.name}
			</span>
		</li>
	);
};
export default CategoryMenuListItem;
