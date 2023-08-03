import classNames from 'classnames';
import React from 'react';

const CategoryMenuItem = ({ category, selectedCategory, setSelectedCategory }) => {
	return (
		<li className='nav-item' onClick={() => setSelectedCategory(category.id)}>
			<span className={classNames('categoryListing', { activeCategory: selectedCategory === category.id })}>
				{category.name}
			</span>
		</li>
	);
};

export default CategoryMenuItem;
