import React, { useContext } from 'react';

import colors from '../../constants/colors';
import DataContext from '../../contexts/dataContext';

import RightMenu from '../../components/rightMenu/RightMenu';
import LargePost from './LargePost';
import Posts from './Posts';

const Home = () => {
	const dataContext = useContext(DataContext);
	const { categories, posts } = dataContext;

	return (
		<>
			<LargePost posts={posts} />
			<section className={`p-1 ${colors.APP_BG}`}>
				<div className='container mb-4'>
					<div className='row g-5'>
						<div className='col-md-8'>
							<Posts posts={posts} categories={categories} />
						</div>
						<div className='col-md-4'>
							<RightMenu />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default Home;
