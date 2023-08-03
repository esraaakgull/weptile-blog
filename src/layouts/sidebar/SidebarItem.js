import classNames from 'classnames';
import { Link, useNavigate } from 'react-router-dom';
import SidebarSubMenu from './SidebarSubMenu';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import AppContext from '../../contexts/appContext';
import UserContext from '../../contexts/userContext';
import Icon from '../../components/Icon';
import { displayIconSidebar, displayTitleSidebar, hasSubItem } from '../../helpers/menu';
import strings from '../../constants/strings';

const SidebarItem = ({ subItem, item, displaySidebar, setDisplaySidebar }) => {
	const appContext = useContext(AppContext);
	const userContext = useContext(UserContext);
	const navigate = useNavigate();
	const [showSubItems, setShowSubItems] = useState(false);

	const handleClick = useCallback(() => {
		if (hasSubItem(item)) {
			setShowSubItems(!showSubItems);
			return;
		}
		setDisplaySidebar(!displaySidebar);
		item.isLogout ? userContext.logout() : navigate(item.path);
	}, [showSubItems, displaySidebar, item]);

	useEffect(() => {
		if (!displaySidebar)
			setShowSubItems(false);
	}, [displaySidebar]);

	return (
		<>
			<div
				className={classNames('sideBarItem', { subItem: subItem }, { active: showSubItems || appContext.currentPath() === item.path })}
				onClick={handleClick}>
				<Link to='#'>
					{displayIconSidebar && 'icon' in item && <div><Icon name={item.icon} /></div>}
					{displayTitleSidebar &&
						<span>{item.isUser ? `${strings.hi} ${userContext.user.username} !` : item.title}</span>}
				</Link>
			</div>
			{hasSubItem(item) && <SidebarSubMenu isOpen={showSubItems} subItems={item.subMenuItems}
												 displaySidebar={displaySidebar}
												 setDisplaySidebar={setDisplaySidebar} />}

		</>
	);
};

export default SidebarItem;
