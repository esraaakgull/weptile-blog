import SidebarItem from './SidebarItem';
import classNames from 'classnames';

const SidebarSubMenu = ({ isOpen, subItems, displaySidebar, setDisplaySidebar }) => {
	return (
		<div className={classNames('subItemsContainer', { closed: !isOpen })}>
			{
				Object.keys(subItems)?.map((item, index) => {
					return (
						<SidebarItem
							item={subItems[item]}
							key={`SidebarSubMenuItem${index}`}
							displaySidebar={displaySidebar}
							setDisplaySidebar={setDisplaySidebar}
							subItem
						/>);
				})}
		</div>
	);
};
export default SidebarSubMenu;
