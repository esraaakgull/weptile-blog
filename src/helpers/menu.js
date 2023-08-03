import { types as menuTypes } from '../constants/menu';

export const displayIconHeader = process.env.REACT_APP_MENU_TYPE === menuTypes.DEFAULT || process.env.REACT_APP_MENU_TYPE === menuTypes.ONLY_ICON;
export const displayTitleHeader = process.env.REACT_APP_MENU_TYPE === menuTypes.DEFAULT || process.env.REACT_APP_MENU_TYPE === menuTypes.ONLY_TITLE;

export const displayIconSidebar = process.env.REACT_APP_SIDEBAR_TYPE === menuTypes.DEFAULT || process.env.REACT_APP_SIDEBAR_TYPE === menuTypes.ONLY_ICON;

export const displayTitleSidebar = process.env.REACT_APP_SIDEBAR_TYPE === menuTypes.DEFAULT || process.env.REACT_APP_SIDEBAR_TYPE === menuTypes.ONLY_TITLE;

export const hasSubItem = (item) => 'subMenuItems' in item;
