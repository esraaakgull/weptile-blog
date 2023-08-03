import React from 'react';

import Search from './Search';
import CategoryMenuItem from './CategoryMenuItem';

const CategoryMenu = ({ categoriesWithTypeAll, selectedCategory, setSelectedCategory }) => {
	return (
		<div className='bgOrange'>
			<div className='container'>
				<nav className='navbar navbar-expand-lg bgOrange'>
					<div className='collapse navbar-collapse'>
						<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
							{categoriesWithTypeAll?.map((category) => {
								return (
									<CategoryMenuItem
										key={`category${category.id}`}
										category={category}
										selectedCategory={selectedCategory}
										setSelectedCategory={setSelectedCategory}
									/>
								);
							})}
						</ul>
						{/*Searching is not active yet*/}
						<Search />
					</div>
				</nav>
			</div>
		</div>
	);
};
export default CategoryMenu;
