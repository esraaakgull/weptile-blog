import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { pages } from '../constants/pages';
import { getUser, setAuth } from '../helpers/api';
import { getFromLocalStorage, setToLocalStorage } from '../helpers/storage';

const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
	const navigate = useNavigate();
	const [user, setUser] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [adminToggle, setAdminToggle] = useState(true);

	const handleAdminToggleChange = () => {
		setAdminToggle(!adminToggle);
		navigate(pages.commonPages.main.path);
	};

	const getUserInfo = async () => {
		setIsLoading(true);
		const user = await getUser();
		setUser(user);
		setIsLoading(false);
	};
	const load = async (paramToken = null) => {
		const token = paramToken || getFromLocalStorage(process.env.jwtStorageName);
		if (token) await getUserInfo();
	};

	const login = async (username, password) => {
		const user = await setAuth(username, password);
		if (!user) return false;
		const token = user.data.jwt;

		setToLocalStorage(process.env.jwtStorageName, token);
		await load(token);
		navigate(pages.commonPages.main.path);
		return true;
	};

	const logout = async () => {
		localStorage.removeItem(process.env.jwtStorageName);
		setUser(null);
		navigate(pages.commonPages.login.path);
	};

	const isUserSuperAdmin = () => user.extra_capabilities.administrator;

	const getPages = () => {
		return (user && isUserSuperAdmin() && adminToggle) ? pages.adminPages : pages.userPages;
	};

	useEffect(() => {
		const dispatch = async () => await load();
		dispatch();
	}, []);

	return (<UserContext.Provider
		value={{
			user,
			getUserInfo,
			login,
			isLoading,
			logout,
			getPages,
			isUserSuperAdmin,
			adminToggle,
			handleAdminToggleChange,
		}}>
		{children}
	</UserContext.Provider>);
};

export default UserContext;
