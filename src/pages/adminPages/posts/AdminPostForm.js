import React from 'react';

import noImage from '../../../assets/images/noImage.png';
import Button from '../../../components/Button';
import FilePicker from '../../../components/FilePicker';
import FormField from '../../../components/FormField';
import Icon from '../../../components/Icon';
import Input from '../../../components/Input';
import Select from '../../../components/Select';
import TextEditor from '../../../components/TextEditor';
import strings from '../../../constants/strings';

const AdminPostForm = ({
						   setDisplayPostForm,
						   category,
						   setCategory,
						   categories,
						   checked,
						   setTitle,
						   title,
						   isTextContentEmpty,
						   draftText,
						   setDraftText,
						   setPickedImage,
						   imageUrl,
						   setImageUrl,
						   handleSubmit,
						   clearForm,
					   }) => {
	return (
		<div className='row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm position-relative bg-white'>
			<div className='col-md-10 p-3 d-flex flex-column position-static'>
				<div className='row p-2'>
					<FormField
						divClass='col-md-3'
						labelClass='form-text'
						labelText={strings.category}>
						<Select
							name='postsCategoryListSelection'
							value={category}
							onChange={(e) => setCategory(e.target.value)}
							options={categories}
							className='form-control custom-select'
						/>
					</FormField>
					<FormField
						divClass='col-md-9'
						labelClass='form-text'
						labelText={strings.requiredTitle}>
						<Input
							className={checked && !title ? 'border-danger' : ''}
							placeholder={strings.title}
							onChange={(e) => setTitle(e.target.value)}
							value={title}
						/>
						{checked && !title && (<span className='text-danger'> {strings.specificRequiredError}</span>)}
					</FormField>
				</div>
				<div className='row p-2'>
					<FormField
						divClass='col-md-12'
						labelClass='form-text'
						labelText={strings.requiredText}>
						<TextEditor
							className={checked && isTextContentEmpty ? 'border-bottom border-danger' : ''}
							placeholder={strings.text}
							value={draftText}
							onChange={(newText) => setDraftText(newText)}
						/>
						{checked && isTextContentEmpty && (
							<span className='text-danger'>{strings.specificRequiredError}</span>)}
					</FormField>
				</div>
				<div className='row p-2'>
					<div>
						<Button
							className='btn-danger me-1 icon'
							onClick={() => {
								clearForm();
								setDisplayPostForm(false);
							}}
							title={strings.close}>
							<Icon name='fa-xmark' />
						</Button>
						<Button
							className='btn-success me-1 icon'
							onClick={handleSubmit}
							title={strings.save}>
							<Icon name='fa-check' />
						</Button>
					</div>
				</div>
			</div>
			<div className='col-md-2'>
				<div className='d-flex justify-content-center align-items-center'>
					<img src={imageUrl} id='selectedImage' alt='' className='w-100 postFormImage' />
				</div>
				<div className='d-flex justify-content-center align-items-center p-2'>
					<Button
						className='btn-danger me-1 icon'
						title={strings.delete}
						onClick={() => {
							setPickedImage(null);
							setImageUrl(noImage);
						}}>
						<Icon name='fa-xmark' />
					</Button>
					<FilePicker
						buttonTitle={strings.uploadPhoto}
						setPickedImage={setPickedImage}
						setImageUrl={setImageUrl}
					/>
				</div>
			</div>
		</div>);
};

export default AdminPostForm;
