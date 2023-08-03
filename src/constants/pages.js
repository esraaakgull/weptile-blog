import React from 'react';

import NotFound from '../pages/NotFound';
import Profile from '../pages/Profile';
import Settings from '../pages/Settings';
import About from '../pages/about/About';
import AdminCategories from '../pages/adminPages/categories/AdminCategories';
import AdminPosts from '../pages/adminPages/posts/AdminPosts';
import BlogPost from '../pages/blogPost/BlogPost';
import Categories from '../pages/categories/Categories';
import ChangePassword from '../pages/changePassword/ChangePassword';
import Contact from '../pages/contact/Contact';
import ForgotPassword from '../pages/forgotPassword/ForgotPassword';
import Home from '../pages/home/Home';
import Signup from '../pages/signup/Signup';
import Login from '../pages/login/Login';
import AdminAbout from '../pages/adminPages/about/AdminAbout';

export const pages = {
	userPages: {
		home: {
			title: 'Home',
			path: '/',
			element: <Home />,
			icon: 'fa-house',
		},
		categories: {
			title: 'Categories',
			path: '/categories',
			element: <Categories />,
			icon: 'fa-list',
		},
		about: {
			title: 'About',
			path: '/about',
			element: <About />,
			icon: 'fa-comments',
		},
		contact: {
			title: 'Contact',
			path: '/contact',
			element: <Contact />,
			icon: 'fa-circle-info',
		},
	},
	adminPages: {
		post: {
			title: 'Post',
			path: '/',
			element: <AdminPosts />,
			icon: 'fa-pen-to-square',
		},
		categories: {
			title: 'Categories',
			path: '/categories',
			element: <AdminCategories />,
			icon: 'fa-list',
		},
		about: {
			title: 'About',
			path: '/about',
			element: <AdminAbout />,
			icon: 'fa-comments',
		},
	},
	commonPages: {
		signup: {
			path: '/signup',
			element: <Signup />,
		},
		login: {
			title: 'Login',
			path: '/login',
			icon: 'fa-sign-in-alt',
			element: <Login />,
		},
		blogPost: {
			path: '/posts/:id',
			element: <BlogPost />,
		},
		forgotPass: {
			path: '/forgotPass',
			element: <ForgotPassword />,
		},
		changePass: {
			path: '/changePass',
			element: <ChangePassword />,
		},
		main: {
			title: 'Main',
			path: '/',
		},
		notFound: {
			path: '*',
			element: <NotFound />,
		},
		profile: {
			title: 'Profile',
			path: '/profile',
			element: <Profile />,
		},
		settings: {
			title: 'Settings',
			path: '/settings',
			element: <Settings />,
		},
		logout: {
			title: 'Logout',
			path: '',
			icon: 'fa-user',
		},
		user: {
			isUser: true,
			title: 'User',
			icon: 'fa-grin-wink',
			path: '#',
			subMenuItems: {
				profile: {
					title: 'Profile',
					icon: 'fa-user-circle',
					path: '/profile',
					element: <Profile />,
				},
				settings: {
					title: 'Settings',
					icon: 'fa-user-cog',
					path: '/settings',
					element: <Settings />,
				},
				logout: {
					isLogout: true,
					title: 'Logout',
					icon: 'fa-sign-out-alt',
					path: '#',
				},
			},
		},
	},
};
