import React, { useContext } from 'react';

import { pages } from '../../constants/pages';
import UserContext from '../../contexts/userContext';
import './header.css';
import HeaderMenuItem from './MenuItem';

const HeaderMenu = () => {
	const userContext = useContext(UserContext);
	const { user, getPages } = userContext;
	const displayPages = getPages();

	return <>
		{Object.keys(displayPages)?.map((item, index) => <HeaderMenuItem key={`menuItem${index}`}
																		item={displayPages[item]} />)}
		<HeaderMenuItem
			item={user ? pages.commonPages.user : pages.commonPages.login}
			imageUrl={user ? user.avatar_urls[Object.keys(user.avatar_urls)[2]] : null}
		/>
	</>;
};

export default HeaderMenu;
