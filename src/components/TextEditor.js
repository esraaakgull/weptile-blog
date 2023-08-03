import classNames from 'classnames';
import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const TextEditor = ({ className, placeholder, value, onChange }) => {
	return (
		<div className='editor'>
			<Editor
				editorState={value}
				wrapperClassName={classNames('wrapper-class', className)}
				editorClassName='editor-class'
				onEditorStateChange={onChange}
				placeholder={placeholder}
			/>
		</div>
	);
};
export default TextEditor;
