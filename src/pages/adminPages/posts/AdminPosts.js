import React, { useContext, useEffect, useState } from 'react';

import LoaderBar from '../../../components/LoaderBar';
import colors from '../../../constants/colors';
import strings from '../../../constants/strings';
import DataContext from '../../../contexts/dataContext';
import { addMedia, addPost, deletePost, updatePost } from '../../../helpers/api';
import AdminPostList from './AdminPostList';
import AdminNewPostButtonPart from './AdminNewPostButtonPart';
import AdminPostForm from './AdminPostForm';
import noImage from '../../../assets/images/noImage.png';
import { convertToRaw } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';
import ContentState from 'draft-js/lib/ContentState';
import EditorState from 'draft-js/lib/EditorState';
import draftToHtml from 'draftjs-to-html';

const AdminPosts = () => {
	const dataContext = useContext(DataContext);
	const formData = new FormData();
	const { categoriesWithTypeAll, posts, loadPosts, categories } = dataContext;

	const [title, setTitle] = useState('');
	const [draftText, setDraftText] = useState(null);
	const [htmlText, setHtmlText] = useState(null);
	const [imageUrl, setImageUrl] = useState(noImage);
	const [pickedImage, setPickedImage] = useState(null);
	// dikkat
	// bu ilk category id sini dinamik olarak çek
	const [category, setCategory] = useState(1);
	const [postToBeUpdated, setPostToBeUpdated] = useState(null);
	const [checked, setChecked] = useState(false);
	const [isTextContentEmpty, setIsTextContentEmpty] = useState(true);
	const [displayPostForm, setDisplayPostForm] = useState(false);
	const [inProgress, setInProgress] = useState(false);

	const clearForm = () => {
		setTitle('');
		setDraftText(null);
		setPickedImage(null);
		setImageUrl(noImage);
		setPostToBeUpdated(null);
		setChecked(false);
		setCategory(1);
	};
	const handleNewPostForm = () => {
		clearForm();
		setDisplayPostForm(true);
	};
	const initForm = () => {
		clearForm();
		setDisplayPostForm(false);
		loadPosts();
	};
	const submitAdd = async () => {
		const pickedImageId = pickedImage ? await uploadMedia() : null;
		const res = await addPost([category], title, htmlText, pickedImageId);
		if (res) initForm();
	};
	const uploadMedia = async () => {
		formData.append('file', pickedImage);
		const media = await addMedia(formData);
		if (!media) return;
		return media.id;
	};
	const submitUpdate = async () => {
		const image = pickedImage ? await uploadMedia() : (imageUrl === noImage) ? 0 : null;
		const res = await updatePost(postToBeUpdated.id, [category], title, htmlText, image);
		if (res) initForm();
	};
	const handleSubmit = async () => {
		setChecked(true);
		if (!title || isTextContentEmpty) return;
		setInProgress(true);
		postToBeUpdated ? await submitUpdate() : await submitAdd();
		setInProgress(false);
	};
	const textOnChange = () => {
		if (!draftText) return;
		const rawContent = convertToRaw(draftText.getCurrentContent());
		const htmlText = draftToHtml(rawContent);
		const contentEmpty = rawContent.blocks.length === 1 && rawContent.blocks[0].text === '';

		setIsTextContentEmpty(contentEmpty);
		setHtmlText(htmlText);

	};
	const handleDelete = async (id) => {
		setInProgress(true);
		const res = await deletePost(id);
		setInProgress(false);
		if (res) loadPosts();
	};
	const handleUpdate = () => {
		if (!postToBeUpdated) return;
		setDisplayPostForm(true);
		const blocksFromHtml = htmlToDraft(postToBeUpdated.content.rendered);
		const { contentBlocks, entityMap } = blocksFromHtml;
		const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
		const image = postToBeUpdated.imageUrl || noImage;

		setImageUrl(image);
		setDraftText(EditorState.createWithContent(contentState));
		setTitle(postToBeUpdated.title.rendered);
		setCategory(postToBeUpdated.categories[0]);
	};

	useEffect(() => {
		textOnChange();
	}, [draftText]);

	useEffect(() => {
		handleUpdate();
	}, [postToBeUpdated]);

	if (inProgress) return <LoaderBar message={strings.requestInProgress} />;
	return (<section className={`p-1 ${colors.APP_BG}`}>
		<div className='container mb-4'>
			<div className='row'>
				<div className='col-md-12'>
					<AdminNewPostButtonPart handleNewPostForm={handleNewPostForm} />
					{displayPostForm && (<AdminPostForm
						setDisplayPostForm={setDisplayPostForm}
						category={category}
						setCategory={setCategory}
						categories={categories}
						checked={checked}
						setTitle={setTitle}
						title={title}
						isTextContentEmpty={isTextContentEmpty}
						draftText={draftText}
						setDraftText={setDraftText}
						setPickedImage={setPickedImage}
						imageUrl={imageUrl}
						setImageUrl={setImageUrl}
						handleSubmit={handleSubmit}
						clearForm={clearForm}
					/>)}
				</div>
				<AdminPostList
					setPostToBeUpdated={setPostToBeUpdated}
					handleDelete={handleDelete}
					categoriesWithTypeAll={categoriesWithTypeAll}
					posts={posts}
				/>
			</div>
		</div>
	</section>);
};
export default AdminPosts;
