import AdminEmployeeList from './AdminEmployeeList';
import React, { useContext, useEffect, useState } from 'react';
import colors from '../../../../constants/colors';
import DataContext from '../../../../contexts/dataContext';
import noImage from '../../../../assets/images/noImage.png';
import LoaderBar from '../../../../components/LoaderBar';
import strings from '../../../../constants/strings';
import { addEmployee, addMedia, deleteEmployee, updateEmployee } from '../../../../helpers/api';
import AdminNewEmployee from './AdminNewEmployee';
import AdminEmployeeForm from './AdminEmployeeForm';

const AdminEmployees = () => {
	const dataContext = useContext(DataContext);
	const formData = new FormData();
	const { employees, departments, loadEmployees } = dataContext;
	const [employeeToBeUpdated, setEmployeeToBeUpdated] = useState(null);
	const [displayEmployeeForm, setDisplayEmployeeForm] = useState(false);
	const [imageUrl, setImageUrl] = useState(noImage);
	const [pickedImage, setPickedImage] = useState(null);
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	// dikkat
	// bu ilk department id sini dinamik olarak çek
	const [department, setDepartment] = useState(11);
	const [checked, setChecked] = useState(false);
	const [inProgress, setInProgress] = useState(false);

	const submitUpdate = async () => {
		const image = pickedImage ? await uploadMedia() : (imageUrl === noImage) ? 0 : null;
		const res = await updateEmployee(employeeToBeUpdated.id, firstName, lastName, [department], image);
		if (res) initForm();
	};
	const clearForm = () => {
		setFirstName('');
		setLastName('');
		setDepartment(11);
		setPickedImage(null);
		setImageUrl(noImage);
		setEmployeeToBeUpdated(null);
		setChecked(false);
	};
	const initForm = () => {
		clearForm();
		setDisplayEmployeeForm(false);
		loadEmployees();
	};
	const uploadMedia = async () => {
		formData.append('file', pickedImage);
		const media = await addMedia(formData);
		if (!media) return;
		return media.id;
	};
	const submitAdd = async () => {
		const pickedImageId = pickedImage ? await uploadMedia() : null;
		const res = await addEmployee(firstName, lastName, pickedImageId, [department]);
		if (res) initForm();
	};
	const handleDelete = async (id) => {
		setInProgress(true);
		const res = await deleteEmployee(id);
		setInProgress(false);
		if (res) loadEmployees();
	};
	const handleSubmit = async () => {
		setChecked(true);
		if (!firstName) return;

		setInProgress(true);
		employeeToBeUpdated ? await submitUpdate() : await submitAdd();
		setInProgress(false);
	};
	const handleUpdate = () => {
		if (!employeeToBeUpdated) return;
		setDisplayEmployeeForm(true);
		const image = employeeToBeUpdated.imageUrl || noImage;
		setImageUrl(image);
		setFirstName(employeeToBeUpdated.acf.first_name);
		setLastName(employeeToBeUpdated.acf.last_name);
		setDepartment(employeeToBeUpdated.departments[0]);
	};

	useEffect(() => {
		handleUpdate();
	}, [employeeToBeUpdated]);

	if (inProgress) return <LoaderBar message={strings.requestInProgress} />;
	return (<section className={`p-1 ${colors.APP_BG}`}>
		<div className='container mb-4'>
			<div className='row'>
				<div className='col-md-6'>
					<AdminNewEmployee setDisplayEmployeeForm={setDisplayEmployeeForm} />
					<AdminEmployeeForm
						departments={departments}
						firstName={firstName}
						setFirstName={setFirstName}
						lastName={lastName}
						setLastName={setLastName}
						department={department}
						setDepartment={setDepartment}
						imageUrl={imageUrl}
						setImageUrl={setImageUrl}
						setPickedImage={setPickedImage}
						handleSubmit={handleSubmit}
						displayEmployeeForm={displayEmployeeForm}
						setDisplayEmployeeForm={setDisplayEmployeeForm}
						checked={checked}
					/>
				</div>
				<AdminEmployeeList
					employees={employees}
					setEmployeeToBeUpdated={setEmployeeToBeUpdated}
					handleDelete={handleDelete} />
			</div>
		</div>
	</section>);

};

export default AdminEmployees;
