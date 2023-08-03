import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import colors from '../../constants/colors';
import strings from '../../constants/strings';
import { removeTextTags } from '../../helpers/posts';
import noImage from '../../assets/images/noImage.png';

const LargePost = ({ posts }) => {
	const [image, setImage] = useState(noImage);
	const [id, setId] = useState(null);
	const [text, setText] = useState(null);
	const [title, setTitle] = useState(null);

	const getLastPostData = () => {
		const lastPost = posts.length > 0 ? posts[0] : null;
		if (lastPost) {
			const text = removeTextTags(lastPost);
			const image = lastPost.imageUrl ? lastPost.imageUrl : noImage;
			setImage(image);
			setText(text);
			setId(lastPost.id);
			setTitle(lastPost.title.rendered);
			setImage(image);
		}
	};

	useEffect(() => {
		getLastPostData();
	}, [posts]);

	return (
		id &&
		<section className={`p-1 ${colors.APP_BG}`}>
			<div className='container mb-4'>
				<div className='mb-4 p-4 text-white rounded largePost'>
					<div className='row'>
						<div className='col-md-6'>
							<h1 className='display-4 fst-italic'>
								{title}
							</h1>
							<p className='lead my-3 cuttedText'>{text}</p>
							<p className='lead mb-0'>
								<Link
									to={`/posts/${id}`}
									className='form-text fw-bold'>
									{strings.continueReading}
								</Link>
							</p>
						</div>
						<div className='col-md-6'>
							<img src={image} className='w-100 postImage' alt='' />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

LargePost.propTypes = {
	posts: PropTypes.array,
};
LargePost.defaultProps = {
	posts: [],
};
export default LargePost;
