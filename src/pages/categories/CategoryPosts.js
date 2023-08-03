import React from 'react';

import colors from '../../constants/colors';
import CategoryPost from './CategoryPost';

const CategoryPosts = ({ categories, posts }) => {
	return (
		posts &&
		<section>
			<div className={`py-5 ${colors.APP_BG}`}>
				<div className='container'>
					<div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
						{posts?.map((post) => {
							return (
								<CategoryPost
									key={`categoryPost${post.id}`}
									post={post}
									categories={categories}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};
export default CategoryPosts;
