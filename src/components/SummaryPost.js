import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import noImage from '../assets/images/noImage.png';
import strings from '../constants/strings';
import { scrollToTop } from '../helpers/window';
import Button from './Button';
import Icon from './Icon';
import { removeTextTags } from '../helpers/posts';
import DataContext from '../contexts/dataContext';

const SummaryPost = ({ post, admin, setPostToBeUpdated, handleDelete }) => {
	const dataContext = useContext(DataContext);
	const { categories } = dataContext;

	const text = removeTextTags(post);
	const categoryName = categories?.find((c) => c.id === post.categories[0])?.name;
	const image = post.imageUrl ? post.imageUrl : noImage;

	return (<div
		className='row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm position-relative bg-white summaryPostCard'>
		<div className='col-md-9 p-3 d-flex flex-column'>
			<div>
				<strong className='d-inline-block mb-2 blogPinkColor'>{categoryName}</strong>
			</div>
			<div>
				<h3 className='blogPinkColor'>{post.title.rendered}</h3>
			</div>
			<div className='mb-1 text-muted flex-grow-1'>{post.date}</div>
			<div className='flex-grow-1'>
				<p className='card-text mb-auto cuttedText'>{text}</p>
			</div>
			<div>
				{!admin ? (<Link to={`/posts/${post.id}`} className='stretched-link'>
					{strings.continueReading}
				</Link>) : (<>
					<Button
						className='btn-danger me-1 icon'
						onClick={() => handleDelete(post.id)}
						title={strings.delete}>
						<Icon name='fa-xmark' />
					</Button>
					<Button
						className='btn-warning me-1 icon '
						onClick={() => {
							setPostToBeUpdated(post);
							scrollToTop();
						}}
						title={strings.edit}>
						<Icon name='fa-pen' />
					</Button>
				</>)}
			</div>
		</div>
		<div className='col-md-3 d-none d-lg-block'>
			<div className='card-img-top'>
				<img src={image} alt='' className='w-100 summaryPostImage' />
			</div>
		</div>
	</div>);
};

export default SummaryPost;
