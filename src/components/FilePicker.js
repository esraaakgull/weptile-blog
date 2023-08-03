import React from 'react';

import Button from './Button';
import Input from './Input';

const FilePicker = ({ buttonTitle, setPickedImage, setImageUrl }) => {
	const hiddenFileInput = React.useRef(null);

	const handleClick = () => hiddenFileInput.current.click();

	const handleChange = (event) => {
		if (!event.target.files) return;
		setImageUrl(URL.createObjectURL(event.target.files[0]));
		setPickedImage(event.target.files[0]);
	};
	return (
		<>
			<Button className='btn btn-secondary' onClick={handleClick}>
				{buttonTitle}
			</Button>
			<Input type='file' className='d-none' ref={hiddenFileInput} onChange={handleChange} />
		</>
	);
};

export default FilePicker;
