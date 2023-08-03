import Button from '../../../../components/Button';
import strings from '../../../../constants/strings';

const AdminNewEmployee = ({ setDisplayEmployeeForm }) => {
	return (<div className='row pt-2 pb-2'>
		<div className='col-md-6'>
			<Button
				className='btn-outline-info me-1'
				onClick={() => setDisplayEmployeeForm(true)}>
				{strings.addTeamMember}
			</Button>
		</div>
	</div>);
};
export default AdminNewEmployee;
