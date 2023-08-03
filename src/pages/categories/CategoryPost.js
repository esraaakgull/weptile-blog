import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button';
import strings from '../../constants/strings';
import { removeTextTags } from '../../helpers/posts';
import noImage from '../../assets/images/noImage.png';

const CategoryPost = ({ post, categories }) => {
	const navigate = useNavigate();
	const text = removeTextTags(post);
	const image = post.imageUrl ? post.imageUrl : noImage;
	const categoryName = categories?.find((c) => c.id === post.categories[0])?.name;

	return (
		<div className='col'>
			<div className='card shadow-sm'>
				<div className='card-img-top '>
					<img src={image} alt='' className='w-100 postImage' />
				</div>
				<div className='card-body'>
					<div>
						<strong className='d-inline-block mb-2 blogPinkColor'>
							{categoryName}
						</strong>
					</div>
					<div>
						<p className='h4 blogPinkColor'>{post.title.rendered}</p>
					</div>
					<div className='categoryCard'>
						<p className='card-text cuttedText'>{text}</p>
					</div>
					<div className='d-flex justify-content-between align-items-center'>
						<div className='btn-group'>
							<Button
								className='btn-sm btn-outline-secondary'
								onClick={() => navigate(`/posts/${post.id}`)}>
								{strings.view}
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CategoryPost;
