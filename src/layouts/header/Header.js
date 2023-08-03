import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Icon from '../../components/Icon';
import Toggle from '../../components/Toggle';
import { pages } from '../../constants/pages';
import strings from '../../constants/strings';
import UserContext from '../../contexts/userContext';
import settings from '../../helpers/settings';
import HeaderMenu from './HeaderMenu';
import './header.css';

const Header = ({ sidebarClicked }) => {
	const userContext = useContext(UserContext);
	const { user, isUserSuperAdmin, handleAdminToggleChange, adminToggle } = userContext;

	return (<>
		<header>
			<div className='px-3 py-2 text-white wb-bg'>
				<div className='container'>
					{user && isUserSuperAdmin() && (<Toggle
						text={adminToggle ? strings.adminPagesText : strings.userPagesText}
						handleChange={handleAdminToggleChange}
						checked={adminToggle}
					/>)}
					<div
						className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>
						<Link to='#' className='wb-menu-bars pe-2'>
							<Icon
								name='fa-bars'
								className=''
								onClick={sidebarClicked}
								size={settings.HEADER_SIDEBAR_ICON_SIZE}
							/>
						</Link>
						<Link
							to={pages.commonPages.main.path}
							className='d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none'>
							<h1>
								{process.env.REACT_APP_SITE_NAME}
								<Icon
									name='fa-feather-pointed'
									className=''
									size={settings.HEADER_ICON_PEN_SIZE}
								/>
							</h1>
						</Link>
						<ul className='nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small'>
							<HeaderMenu />
						</ul>
					</div>
				</div>
			</div>
		</header>
	</>);
};

export default Header;
