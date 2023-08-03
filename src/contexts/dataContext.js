import { createContext, useEffect, useState } from 'react';

import { getEmployees, getMedia, getCategories, getPosts, getDepartments } from '../helpers/api';
import strings from '../constants/strings';

const DataContext = createContext(null);

export const DataContextProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [categories, setCategories] = useState([]);
	const [posts, setPosts] = useState([]);
	const [employees, setEmployees] = useState([]);
	const [departments, setDepartments] = useState([]);
	const [categoriesWithTypeAll, setCategoriesWithTypeAll] = useState([]);

	const loadCategories = async () => {
		setIsLoading(true);
		const categories = await getCategories();
		if (!categories) {
			setIsLoading(false);
			return;
		}
		setCategoriesWithTypeAll([{ id: '', name: strings.allText }, ...categories]);
		setCategories(categories);
		setIsLoading(false);
	};

	const loadPosts = async () => {
		setIsLoading(true);
		const [posts, allMedia] = await Promise.all([getPosts(), getMedia()]);
		if (!posts) {
			setIsLoading(false);
			return;
		}
		if (allMedia) {
			posts.forEach(post => {
				const media = allMedia.find(media => media.id === post.featured_media);
				if (media) post['imageUrl'] = media.source_url;
			});
		}
		setPosts(posts);
		setIsLoading(false);
	};

	const loadDepartments = async () => {
		setIsLoading(true);
		const departments = await getDepartments();
		departments ? setDepartments(departments) : '';
		setIsLoading(false);
	};

	const loadEmployees = async () => {
		setIsLoading(true);
		const [employees, allMedia, departments] = await Promise.all([getEmployees(), getMedia(), getDepartments()]);
		if (!employees) {
			setIsLoading(false);
			return;
		}
		employees.forEach(employee => {
			const department = departments.find(department => department.id === employee.departments[0]);
			if (department) employee['departmentName'] = department.name;
			if (allMedia) {
				const media = allMedia.find(media => media.id === employee.featured_media);
				if (media) employee['imageUrl'] = media.source_url;
			}
		});
		setEmployees(employees);
		setIsLoading(false);
	};

	const loadData = () => {
		loadCategories();
		loadPosts();
		loadEmployees();
		loadDepartments();
	};

	useEffect(() => {
		loadData();
	}, []);

	return (<DataContext.Provider
		value={{
			isLoading,
			categories,
			posts,
			employees,
			departments,
			loadCategories,
			loadPosts,
			loadEmployees,
			loadDepartments,
			categoriesWithTypeAll,
		}}>
		{children}
	</DataContext.Provider>);
};

export default DataContext;
