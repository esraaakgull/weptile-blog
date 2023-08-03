import React, { useContext} from 'react';

import colors from '../../constants/colors';
import strings from '../../constants/strings';
import TeamProfile from './TeamProfile';
import DataContext from '../../contexts/dataContext';

const Team = () => {
	const dataContext = useContext(DataContext);
	const {employees} = dataContext

	return (<section className={`${colors.APP_BG}`}>
		<div className='container px-4 py-5'>
			<h2 className='b-2 p-2 '>{strings.team}</h2>
			<hr />
			<div className='row pt-2'>
				{employees?.map((employee) => (
					<TeamProfile employee={employee} key={`teamProfile${employee.id}`} />))}
			</div>
		</div>
	</section>);
};
export default Team;
