import React, { useState } from 'react';

import Select from '../../../components/Select';
import SummaryPost from '../../../components/SummaryPost';

const AdminPostList = ({ categoriesWithTypeAll, posts, setPostToBeUpdated, handleDelete }) => {
	const [selectedCategory, setSelectedCategory] = useState('');

	const getPosts = () => {
		if (selectedCategory) {
			return posts.filter(post => {
				return post.categories[0] === parseInt(selectedCategory);
			});
		} else {
			return posts;
		}
	};

	return (
		<div className='col-md-12'>
			<div className='row'>
				<div className='col-md-3'>
					<Select
						selectedItem={selectedCategory}
						name='postsCategoryListSelection'
						options={categoriesWithTypeAll}
						onChange={(e) => setSelectedCategory(e.target.value)}
						className='form-select form-select-lg mb-3'
					/>
				</div>
			</div>
			<div className='row'>
				<div className='col-md-12'>
					{getPosts()?.map((post) => {
						return (<SummaryPost
							key={`summaryPost${post.id}`}
							post={post}
							admin
							setPostToBeUpdated={setPostToBeUpdated}
							handleDelete={handleDelete}
						/>);
					})}
				</div>
			</div>
		</div>);
};
export default AdminPostList;
