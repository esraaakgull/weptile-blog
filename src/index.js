import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './assets/styles/style.css';
import { AppContextProvider } from './contexts/appContext';
import { DataContextProvider } from './contexts/dataContext';
import { UserContextProvider } from './contexts/userContext';
import App from './pages/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<BrowserRouter>
		<AppContextProvider>
			<UserContextProvider>
				<DataContextProvider>
					<App />
				</DataContextProvider>
			</UserContextProvider>
		</AppContextProvider>
	</BrowserRouter>,
);
