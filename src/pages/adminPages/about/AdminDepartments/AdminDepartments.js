import colors from '../../../../constants/colors';
import DataContext from '../../../../contexts/dataContext';
import strings from '../../../../constants/strings';
import { addDepartment, deleteDepartment, updateDepartment } from '../../../../helpers/api';
import React, { useContext, useEffect, useState } from 'react';
import AdminDepartmentList from './AdminDepartmentList';
import AdminNewDepartment from './AdminNewDepartment';
import AdminDepartmentForm from './AdminDepartmentForm';
import LoaderBar from '../../../../components/LoaderBar';

const AdminDepartments = () => {
	const dataContext = useContext(DataContext);
	const { departments, loadDepartments } = dataContext;
	const [departmentToBeUpdated, setDepartmentToBeUpdated] = useState(null);
	const [displayDepartmentForm, setDisplayDepartmentForm] = useState(false);
	const [inProgress, setInProgress] = useState(false);
	const [departmentName, setDepartmentName] = useState('');
	const [errorMessage, setErrorMessage] = useState(null);

	const clearForm = () => {
		setDepartmentName('');
		setDepartmentToBeUpdated(null);
		setErrorMessage(null);
	};
	const handleNewDepartmentForm = () => {
		clearForm();
		setDisplayDepartmentForm(true);
	};
	const initForm = () => {
		clearForm();
		setDisplayDepartmentForm(false);
		loadDepartments();
	};
	const departmentExist = () => {
		return departments.some((c) => c.name === departmentName);
	};
	const submitAdd = async () => {
		if (departmentExist()) {
			setErrorMessage(strings.sameDepartmentMessage);
			return;
		}
		const res = await addDepartment(departmentName);
		if (res) {
			setDisplayDepartmentForm(false);
			loadDepartments();
		}
	};
	const submitUpdate = async () => {
		if (departmentName === departmentToBeUpdated.name) {
			initForm();
			return;
		}
		if (departmentExist()) {
			setErrorMessage(strings.sameDepartmentMessage);
			setInProgress(false);
			return;
		}
		const res = await updateDepartment(departmentToBeUpdated.id, departmentName);
		if (res) initForm();
	};
	const handleSubmit = async () => {
		if (!departmentName) {
			setErrorMessage(strings.specificRequiredError);
			return;
		}
		setInProgress(true);
		departmentToBeUpdated ? await submitUpdate() : await submitAdd();
		setInProgress(false);
	};
	const handleDelete = async (id) => {
		setInProgress(true);
		const res = await deleteDepartment(id);
		setInProgress(false);
		if (res) loadDepartments();
	};
	const handleUpdate = () => {
		if (!departmentToBeUpdated) return;
		setDisplayDepartmentForm(true);
		setDepartmentName(departmentToBeUpdated.name);
		setErrorMessage(null);

	};

	useEffect(() => {
		handleUpdate();
	}, [departmentToBeUpdated]);

	if (inProgress) return <LoaderBar message={strings.requestInProgress} />;
	return (<section className={`p-1 ${colors.APP_BG}`}>
		<div className='container mb-4'>
			<div className='row'>
				<div className='col-md-6'>
					<AdminNewDepartment handleNewDepartmentForm={handleNewDepartmentForm} />
					{displayDepartmentForm && (<AdminDepartmentForm
						departmentName={departmentName}
						setDepartmentName={setDepartmentName}
						errorMessage={errorMessage}
						setErrorMessage={setErrorMessage}
						setDisplayDepartmentForm={setDisplayDepartmentForm}
						handleSubmit={handleSubmit}
					/>)}
				</div>
				<AdminDepartmentList
					departments={departments}
					setDepartmentToBeUpdated={setDepartmentToBeUpdated}
					handleDelete={handleDelete}
				/>
			</div>
		</div>
	</section>);
};
export default AdminDepartments;
