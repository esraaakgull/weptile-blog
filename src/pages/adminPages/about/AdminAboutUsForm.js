import React, { useState } from 'react';

import noImage from '../../../assets/images/noImage.png';
import Button from '../../../components/Button';
import FilePicker from '../../../components/FilePicker';
import FormField from '../../../components/FormField';
import Icon from '../../../components/Icon';
import Input from '../../../components/Input';
import TextEditor from '../../../components/TextEditor';
import strings from '../../../constants/strings';
import colors from '../../../constants/colors';

const AdminAboutUsForm = () => {
	const [displayPostForm, setDisplayPostForm] = useState(false);
	const imageUrl = noImage;
	return (<section className={`p-1 ${colors.APP_BG}`}>
		<div className='container'>
			<div className='row'>
				<div className='col-md-12'>
					<div className='row'>
						<div className='col-md-4 p-3'>
							<Button className='btn-outline-info me-1'
									onClick={() => setDisplayPostForm(true)}>
								{strings.editAboutUs}
							</Button>
						</div>
					</div>
					{displayPostForm && <div
						className='row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative bg-white'>
						<div className='col-md-10 p-3 d-flex flex-column position-static'>
							<div className='row p-2'>
								<FormField
									divClass='col-md-3'
									labelClass='form-text'
									labelText={strings.title}>
									<Input type='text' placeholder={strings.aboutUs} />
								</FormField>
							</div>
							<div className='row p-2'>
								<FormField
									divClass='col-md-12'
									labelClass='form-text'
									labelText={strings.text}>
									<TextEditor placeholder={strings.text} />
								</FormField>
							</div>
							<div className='row p-2'>
								<div>
									<Button className='btn-danger me-1 icon' onClick={() => setDisplayPostForm(false)}>
										<Icon name='fa-xmark' />
									</Button>
									<Button className='btn-success me-1 icon '>
										<Icon name='fa-check' />
									</Button>
								</div>
							</div>
						</div>
						<div className='col-md-2'>
							<div className='d-flex justify-content-center align-items-center'>
								<img
									src={imageUrl}
									id='selectedImage'
									alt=''
									className='w-100 postFormImage'
								/>
							</div>
							<div className='d-flex justify-content-center pt-3'>
								<Button className='btn-danger me-1 icon'>
									<Icon name='fa-xmark' />
								</Button>
								<FilePicker buttonTitle={strings.uploadPhoto} id='uploadingPhoto' />
							</div>
						</div>
					</div>}
				</div>
			</div>
		</div>
	</section>);
};
export default AdminAboutUsForm;
