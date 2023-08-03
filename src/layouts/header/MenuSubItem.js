import { Dropdown } from 'react-bootstrap';
import React, { useContext } from 'react';
import UserContext from '../../contexts/userContext';
import { useNavigate } from 'react-router-dom';

const HeaderMenuSubMenu = ({ item, content, currentPath }) => {
	const userContext = useContext(UserContext);
	const navigate = useNavigate();

	return (
		<Dropdown align='end' className='wb-custom-dropdown' autoClose>
			<Dropdown.Toggle>
				{content}
			</Dropdown.Toggle>
			<Dropdown.Menu bg='warning' variant='light'>
				{Object.keys(item['subMenuItems'])?.map((subMenuItem, index) => {
					const subItem = item['subMenuItems'][subMenuItem];
					return (
						<Dropdown.Item
							active={currentPath === subItem.path}
							key={`subMenuItem${index}`}
							onClick={() => subItem.isLogout ? userContext.logout() : navigate(subItem.path)}>
							{subItem.title}
						</Dropdown.Item>
					);
				})}
			</Dropdown.Menu>
		</Dropdown>
	);
};

export default HeaderMenuSubMenu;
