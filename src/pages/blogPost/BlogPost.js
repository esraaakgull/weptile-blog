import React, { useContext } from 'react';

import colors from '../../constants/colors';
import RightMenu from '../../components/rightMenu/RightMenu';
import Post from './Post';
import { useParams } from 'react-router-dom';
import DataContext from '../../contexts/dataContext';

const BlogPost = () => {
	const params = useParams();
	const dataContext = useContext(DataContext);
	const { posts } = dataContext;
	const post = posts.find(post => post.id === parseInt(params.id));

	return (
		<div className={`p-1 ${colors.APP_BG}`}>
			<div className='container mt-3 mb-4'>
				<div className='row'>
					<div className='col-lg-8'>
						<Post post={post} />
					</div>
					<div className='col-md-4'>
						<RightMenu />
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogPost;
