import React from 'react';

import strings from '../../constants/strings';
import CommentPart from './CommentPart';
import noImage from '../../assets/images/noImage.png';

const Post = ({ post }) => {
	const image = post.imageUrl ? post.imageUrl : noImage;

	return (
		<>
			<header className='mb-4'>
				<h1 className='fw-bolder mb-1'>{post.title.rendered}</h1>
				<div className='text-muted fst-italic mb-2'>
					{strings.postedOn} {post.date}
				</div>
			</header>
			<div className='mb-4'>
				<img className='rounded w-100 blogPostImage' src={image} alt='' />
			</div>
			<section className='mb-5'>
				<p dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
			</section>
			<CommentPart />
		</>
	);
};

export default Post;
