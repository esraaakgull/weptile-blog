import React, { useContext, useState } from 'react';

import Button from '../../../../components/Button';
import FormField from '../../../../components/FormField';
import Icon from '../../../../components/Icon';
import Input from '../../../../components/Input';
import Select from '../../../../components/Select';
import Textarea from '../../../../components/Textarea';
import strings from '../../../../constants/strings';
import DataContext from '../../../../contexts/dataContext';

const AdminFeatureForm = () => {
	const dataContext = useContext(DataContext);
	const { categories } = dataContext;
	const [displayFeatureForm, setDisplayFeatureForm] = useState(false);

	return (<div className='col-md-6'>
		<div className='row pt-2 pb-2'>
			<div className='col-md-6'>
				<Button
					className='btn-outline-info me-1'
					onClick={() => setDisplayFeatureForm(true)}>
					{strings.addNewFeature}
				</Button>
			</div>
		</div>
		{displayFeatureForm && (<div
			className='col-md-12 p-3 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative bg-white'>
			<div className='row p-2'>
				<FormField labelClass='form-text' labelText={strings.icon}>
					<div>
						{/*icons will be here*/}
						<Select
							name='aboutFeatureIconSelection'
							options={categories}
							onChange={() => ''}
							className=' p-2 rounded-3'
							placeholder={strings.selectIcon}
						/>
					</div>
				</FormField>
			</div>
			<div className='row p-2'>
				<FormField labelClass='form-text' labelText={strings.title}>
					<Input type='text' placeholder={strings.featureTitle} />
				</FormField>
			</div>
			<div className='row p-2'>
				<FormField labelClass='form-text' labelText={strings.text}>
					<Textarea placeholder={strings.featureText} />
				</FormField>
			</div>
			<div className='row p-2'>
				<div>
					<Button className='btn-danger me-1 icon' onClick={() => setDisplayFeatureForm(false)}>
						<Icon name='fa-xmark' />
					</Button>
					<Button className='btn-success me-1 icon'>
						<Icon name='fa-check' />
					</Button>
				</div>
			</div>
		</div>)}
	</div>);
};
export default AdminFeatureForm;
