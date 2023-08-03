import './sidebar.css';
import Icon from '../../components/Icon';
import settings from '../../helpers/settings';
import React, { useContext } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import SidebarItem from './SidebarItem';
import UserContext from '../../contexts/userContext';
import { pages } from '../../constants/pages';
import { displayIconSidebar, displayTitleSidebar } from '../../helpers/menu';

const Sidebar = ({ displaySidebar, setDisplaySidebar }) => {
	const userContext = useContext(UserContext);
	const { user, getPages } = userContext;
	const pagesToDisplay = getPages()

	return (
		<>
			<div
				className={classNames('d-flex flex-column sideBarMenu', { onlyIconSidebar: displayIconSidebar && !displayTitleSidebar }, { active: displaySidebar })}>
				<div
					className={classNames('custom-sidebar-section p-2 pt-5 sideBarIcon')}>
					<Link to='#'>
						<Icon name='fa-xmark' size={settings.HEADER_SIDEBAR_ICON_SIZE}
							  onClick={() => setDisplaySidebar(!displaySidebar)} />
					</Link>
				</div>
				<div className={classNames({ onlyIconDiv: displayIconSidebar && !displayTitleSidebar })}>
					{
						Object.keys(pagesToDisplay)?.map((item, index) => {
							return (
								<SidebarItem
									item={pagesToDisplay[item]}
									key={`SideBarItem${index}`}
									displaySidebar={displaySidebar}
									setDisplaySidebar={setDisplaySidebar}
								/>);
						})
					}
					{user ? (
						<SidebarItem
							item={pages.commonPages.user}
							displaySidebar={displaySidebar}
							setDisplaySidebar={setDisplaySidebar}
						/>
					) : (
						<SidebarItem
							item={pages.commonPages.login}
							displaySidebar={displaySidebar}
							setDisplaySidebar={setDisplaySidebar}
						/>
					)}
				</div>
			</div>
		</>
	);
};
export default Sidebar;
