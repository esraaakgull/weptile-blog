import React, { useContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import '../assets/styles/app.css';
import LoaderClip from '../components/LoaderClip';
import { pages } from '../constants/pages';
import DataContext from '../contexts/dataContext';
import UserContext from '../contexts/userContext';
import Header from '../layouts/header/Header';
import Sidebar from '../layouts/sidebar/Sidebar';
import Footer from '../layouts/footer/Footer';

const App = () => {
	const userContext = useContext(UserContext);
	const dataContext = useContext(DataContext);
	const pagesToDisplay = { ...userContext.getPages(), ...pages.commonPages };
	const [isSidebarEnabled, setIsSidebarEnabled] = useState(false);

	if (userContext.isLoading || dataContext.isLoading) return <LoaderClip />;
	return (
		<div>
			<ToastContainer />
			<Header sidebarClicked={() => setIsSidebarEnabled(!isSidebarEnabled)} />
			<Sidebar displaySidebar={isSidebarEnabled} setDisplaySidebar={setIsSidebarEnabled} />
			<Routes>
				{Object.keys(pagesToDisplay)?.map((page, index) => (
					<Route
						exact
						path={pagesToDisplay[page].path}
						element={pagesToDisplay[page].element}
						key={`page${index}`}
					/>
				))}
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
