import React from 'react';

import SummaryPost from '../../components/SummaryPost';

const Posts = ({ posts }) => {
	return posts?.map((post) => {
		return <SummaryPost key={`summaryPost${post.id}`} post={post} />;
	});
};

export default Posts;
