import React, { useContext } from 'react';

import strings from '../../constants/strings';
import DataContext from '../../contexts/dataContext';
import CategoryMenuListItem from './CategoryMenuListItem';

const CategoryMenuList = () => {
	const dataContext = useContext(DataContext);
	const { categoriesWithTypeAll } = dataContext;

	return (<div className='card mb-4'>
			<div className='card-header'>{strings.categories}</div>
			<div className='card-body'>
				<div className='row'>
					<ul className='list-unstyled mb-0'>
						{categoriesWithTypeAll?.map((category) => (
							<CategoryMenuListItem category={category} key={`listItem${category.id}`} />))}
					</ul>
				</div>
			</div>
		</div>);
};
export default CategoryMenuList;
