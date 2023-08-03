import classNames from 'classnames';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Icon from '../../components/Icon';
import { Image } from 'react-bootstrap';
import AppContext from '../../contexts/appContext';
import { displayIconHeader, displayTitleHeader, hasSubItem } from '../../helpers/menu';
import HeaderMenuSubMenu from './MenuSubItem';

const HeaderMenuItem = ({ item, imageUrl }) => {
	const currentPath = useContext(AppContext).currentPath();

	const content = imageUrl ? <Image src={imageUrl} className='wb-avatar me-1 rounded-circle' /> :
		<Link to={item.path} className={classNames('wb-nav-links', { active: currentPath === item.path })}>
			{displayIconHeader && <Icon name={item.icon} />}
			{displayTitleHeader && <span className='ps-2'>{item.title}</span>}
		</Link>;

	return (<div className='d-flex align-items-center'>
		<li className='nav-link nav-item ps-3'>
			{!hasSubItem(item) ? content :
				<HeaderMenuSubMenu item={item} content={content} currentPath={currentPath} />}
		</li>
	</div>);

};
export default HeaderMenuItem;
