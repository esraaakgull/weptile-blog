import { createContext } from 'react';
import { useLocation } from 'react-router-dom';

const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
	const location = useLocation();
	const currentPath = () => location.pathname;

	return <AppContext.Provider value={{ currentPath }}>
		{children}
	</AppContext.Provider>;
};

export default AppContext;
