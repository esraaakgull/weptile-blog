import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DataContext from '../../contexts/dataContext';
import CategoryMenu from './CategoryMenu';
import CategoryPosts from './CategoryPosts';

const Categories = () => {
	const { state } = useLocation();
	const dataContext = useContext(DataContext);
	const { categories, posts, categoriesWithTypeAll } = dataContext;
	const [selectedCategory, setSelectedCategory] = useState(state?.id || '');

	const getPosts = () => {
		if (selectedCategory) {
			return posts.filter(post => {
				return post.categories[0] === selectedCategory;
			});
		}
		history.replaceState({ id: '' }, '');
		return posts;
	};

	useEffect(() => {
		getPosts();
	}, [selectedCategory]);

	return (
		<>
			<CategoryMenu
				categoriesWithTypeAll={categoriesWithTypeAll}
				selectedCategory={selectedCategory}
				setSelectedCategory={setSelectedCategory}
			/>
			<CategoryPosts categories={categories} posts={getPosts()} />
		</>
	);
};
export default Categories;
