import React from 'react';
import SocialMediaMenuList from './SocialMediaMenuList';
import CategoryMenuList from './CategoryMenuList';


const RightMenu = () => {
	return (
		<div className='position-sticky'>
			<CategoryMenuList />
			<SocialMediaMenuList />
		</div>
	);
};

export default RightMenu;
