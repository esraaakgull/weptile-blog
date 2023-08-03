import React, { useContext, useEffect, useState } from 'react';

import LoaderBar from '../../../components/LoaderBar';
import colors from '../../../constants/colors';
import strings from '../../../constants/strings';
import DataContext from '../../../contexts/dataContext';
import AdminCategoryList from './AdminCategoryList';
import AdminNewCategory from './AdminNewCategory';
import AdminCategoryForm from './AdminCategoryForm';
import { addCategory, deleteCategory, updateCategory } from '../../../helpers/api';

const AdminCategories = () => {
	const dataContext = useContext(DataContext);
	const { categories, loadCategories } = dataContext;
	const [categoryToBeUpdated, setCategoryToBeUpdated] = useState(null);
	const [displayCategoryForm, setDisplayCategoryForm] = useState(false);
	const [inProgress, setInProgress] = useState(false);
	const [categoryName, setCategoryName] = useState('');
	const [errorMessage, setErrorMessage] = useState(null);

	const clearForm = () => {
		setCategoryName('');
		setCategoryToBeUpdated(null);
		setErrorMessage(null);
	};
	const handleNewCategoryForm = () => {
		clearForm();
		setDisplayCategoryForm(true);
	};
	const categoryExist = () => {
		return categories.some((c) => c.name === categoryName);
	};
	const submitAdd = async () => {
		if (categoryExist()) {
			setErrorMessage(strings.sameCategoryMessage);
			return;
		}
		const res = await addCategory(categoryName);
		if (res) {
			setDisplayCategoryForm(false);
			loadCategories();
		}
	};
	const initForm = () => {
		clearForm();
		setDisplayCategoryForm(false);
		loadCategories();
	};
	const submitUpdate = async () => {
		if (categoryName === categoryToBeUpdated.name) {
			initForm();
			return;
		}
		if (categoryExist()) {
			setErrorMessage(strings.sameCategoryMessage);
			setInProgress(false);
			return;
		}
		const res = await updateCategory(categoryToBeUpdated.id, categoryName);
		if (res) initForm();

	};
	const handleSubmit = async () => {
		if (!categoryName) {
			setErrorMessage(strings.specificRequiredError);
			return;
		}
		setInProgress(true);
		categoryToBeUpdated ? await submitUpdate() : await submitAdd();
		setInProgress(false);
	};
	const handleDelete = async (id) => {
		setInProgress(true);
		const res = await deleteCategory(id);
		setInProgress(false);
		if (res) loadCategories();
	};
	const handleUpdate = () => {
		if (!categoryToBeUpdated)
			return;
		setDisplayCategoryForm(true);
		setCategoryName(categoryToBeUpdated.name);
		setErrorMessage(null);

	};

	useEffect(() => {
		handleUpdate();
	}, [categoryToBeUpdated]);

	if (inProgress) return <LoaderBar message={strings.requestInProgress} />;
	return (
		<section className={`p-1 min-vh-100 ${colors.APP_BG}`}>
			<div className='container mb-4'>
				<div className='row'>
					<div className='col-md-6'>
						<AdminNewCategory handleNewCategoryForm={handleNewCategoryForm} />
						{displayCategoryForm && (
							<AdminCategoryForm
								categoryName={categoryName}
								setCategoryName={setCategoryName}
								errorMessage={errorMessage}
								setErrorMessage={setErrorMessage}
								setDisplayCategoryForm={setDisplayCategoryForm}
								handleSubmit={handleSubmit}
							/>)}
					</div>
					<AdminCategoryList
						categories={categories}
						setCategoryToBeUpdated={setCategoryToBeUpdated}
						handleDelete={handleDelete}
					/>
				</div>
			</div>
		</section>);
};
export default AdminCategories;
