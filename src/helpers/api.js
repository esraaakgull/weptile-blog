import axios from 'axios';

import strings from '../constants/strings';
import { getFromLocalStorage } from './storage';
import { showErrorNotification } from './toast';

export const api = () => {
	const token = getFromLocalStorage(process.env.jwtStorageName);
	const headers = { 'Content-Type': 'application/json' };
	if (token) headers['Authorization'] = `Bearer${token}`;
	return axios.create({
		baseURL: 'http://localhost/wordpress/weptile-blog/wp-json',
		headers,
	});
};
export const getCategories = async () => {
	let res = null;
	try {
		const { data } = await api().get('/wp/v2/categories');
		res = data;
	} catch (err) {
		showErrorNotification(err.response?.data.data.message || strings.systemError);
	}
	return res;
};
export const getPosts = async () => {
	let res = null;
	try {
		const { data } = await api().get('/wp/v2/posts?per_page=100');
		res = data;
	} catch (err) {
		showErrorNotification(err.response?.data.data.message || strings.systemError);
	}
	return res;
};

export const getMedia = async () => {
	let res = null;
	try {
		const { data } = await api().get(`/wp/v2/media?per_page=100`, {});
		res = data;
	} catch (err) {
		showErrorNotification(err.response?.data.data.message || strings.systemError);
	}
	return res;
};

export const getUsers = async () => {
	let res = null;
	try {
		const { data } = await api().get('/wp/v2/users/me');
		res = data;
	} catch (err) {
		showErrorNotification(err.response?.data.data.message || strings.systemError);
	}
	return res;
};

export const getEmployees = async () => {
	let res = null;
	try {
		const { data } = await api().get('/wp/v2/employees?per_page=100');
		res = data;
	} catch (err) {
		showErrorNotification(err.response?.data.data.message || strings.systemError);
	}
	return res;
};

export const getDepartments = async () => {
	let res = null;
	try {
		const { data } = await api().get('/wp/v2/departments');
		res = data;
	} catch (err) {
		showErrorNotification(err.response?.data.data.message || strings.systemError);
	}
	return res;
};

export const getUser = async () => {
	let res = null;
	try {
		const { data } = await api().get('/wp/v2/users/me?context=edit');
		res = data;
	} catch (err) {
		showErrorNotification(err.response?.data.data.message || strings.systemError);
	}
	return res;
};

export const addUser = async (first_name, last_name, user_login, email, password) => {
	let res = null;
	try {
		const data = { first_name, last_name, user_login, email, password };
		res = await api().post('/simple-jwt-login/v1/users', data);
	} catch (err) {
		showErrorNotification(err.response?.data.data.message || strings.systemError);
	}
	return res;
};

export const addCategory = async (name) => {
	let res = null;
	try {
		res = await api().post('/wp/v2/categories', { name });
	} catch (err) {
		showErrorNotification(err.response?.data.data.message || strings.systemError);
	}
	return res;
};
export const addDepartment = async (name) => {
	let res = null;
	try {
		res = await api().post('/wp/v2/departments', { name });
	} catch (err) {
		showErrorNotification(err.response?.data.data.message || strings.systemError);
	}
	return res;
};
export const addPost = async (category, title, content, featured_media) => {
	let res = null;
	try {
		const data = {
			categories: category,
			title,
			content,
			status: 'publish',
			featured_media,
		};
		res = await api().post('/wp/v2/posts', data);
	} catch (err) {
		showErrorNotification(err.response?.data.data.message || strings.systemError);
	}
	return res;
};
export const addMedia = async (media) => {
	let res = null;
	try {
		const { data } = await api().post('/wp/v2/media', media, {
			headers: {
				'Content-Type': 'form/multipart',
			},
		});
		res = data;
	} catch (err) {
		showErrorNotification(err.response?.data.data.message || strings.systemError);
	}
	return res;
};
export const addEmployee = async (first_name, last_name, featured_media, department) => {
	let res = null;
	try {
		const data = {
			acf: { first_name, last_name },
			departments: department,
			status: 'publish',
			featured_media,
		};
		res = await api().post('/wp/v2/employees', data);
	} catch (err) {
		showErrorNotification(err.response?.data.data.message || strings.systemError);
	}
	return res;
};

export const deleteCategory = async (id) => {
	let res = null;
	try {
		res = await api().delete(`/wp/v2/categories/${id}?force=true`);
	} catch (err) {
		showErrorNotification(err.response?.data.data.message || strings.systemError);
	}
	return res;
};

export const deleteDepartment = async (id) => {
	let res = null;
	try {
		res = await api().delete(`/wp/v2/departments/${id}?force=true`);
	} catch (err) {
		showErrorNotification(err.response?.data.data.message || strings.systemError);
	}
	return res;
};

export const deletePost = async (id) => {
	let res = null;
	try {
		res = await api().delete(`/wp/v2/posts/${id}?force=true`);
	} catch (err) {
		showErrorNotification(err.response?.data.data.message || strings.systemError);
	}
	return res;
};
export const deleteEmployee = async (id) => {
	let res = null;
	try {
		res = await api().delete(`/wp/v2/employees/${id}?force=true`);
	} catch (err) {
		showErrorNotification(err.response?.data.data.message || strings.systemError);
	}
	return res;
};

export const updateUser = async (firstName, lastName) => {
	let res = null;
	const data = {
		first_name: firstName,
		last_name: lastName,
	};
	try {
		res = await api().post(`/wp/v2/users/me`, data);
	} catch (err) {
		showErrorNotification(err.response?.data.data.message || strings.systemError);
	}
	return res;
};

export const updateCategory = async (categoryId, categoryName) => {
	let res = null;
	try {
		res = await api().put(`/wp/v2/categories/${categoryId}`, { name: categoryName });
	} catch (err) {
		showErrorNotification(err.response?.data.data.message || strings.systemError);
	}
	return res;
};

export const updateDepartment = async (id, name) => {
	let res = null;
	try {
		res = await api().put(`/wp/v2/departments/${id}`, { name });
	} catch (err) {
		showErrorNotification(err.response?.data.data.message || strings.systemError);
	}
	return res;
};

export const updatePost = async (id, category, title, content, featured_media) => {
	let res = null;
	try {
		const data = {
			categories: category,
			title,
			content,
		};
		featured_media
			? (data.featured_media = featured_media)
			: featured_media === 0
			? (data.featured_media = null)
			: '';
		res = await api().put(`/wp/v2/posts/${id}`, data);
	} catch (err) {
		showErrorNotification(err.response?.data.data.message || strings.systemError);
	}
	return res;
};
export const updateEmployee = async (id, first_name, last_name, department, featured_media) => {
	let res = null;
	try {
		const data = { acf: { first_name, last_name }, departments: department };
		featured_media
			? (data.featured_media = featured_media)
			: featured_media === 0
			? (data.featured_media = null)
			: '';
		res = await api().put(`/wp/v2/employees/${id}`, data);
	} catch (err) {
		showErrorNotification(err.response?.data.data.message || strings.systemError);
	}
	return res;
};

export const setAuth = async (username, password) => {
	let res = null;
	try {
		const { data } = await api().post('/simple-jwt-login/v1/auth', {
			username: username,
			password: password,
		});
		res = data;
	} catch (err) {
		showErrorNotification(err.response?.data.data.message || strings.systemError);
	}
	return res;
};

export const passwordResetRequest = async (email) => {
	let res = null;
	try {
		res = await api().post('/simple-jwt-login/v1/user/reset_password', {
			email: email,
		});
	} catch (err) {
		showErrorNotification(err.response?.data.data.message || strings.systemError);
	}
	return res;
};

export const passwordReset = async (email, code, password) => {
	let res = null;
	try {
		res = await api().put('/simple-jwt-login/v1/user/reset_password', {
			email: email,
			code: code,
			new_password: password,
		});
	} catch (err) {
		showErrorNotification(err.response?.data.data.message || strings.systemError);
	}
	return res;
};
