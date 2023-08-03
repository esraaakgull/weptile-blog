const Toggle = ({ text, checked, handleChange }) => {
	return (
		<div className='form-check form-switch pb-2 d-flex justify-content-end align-items-center'>
			<label className='form-check-label' htmlFor='flexSwitchCheckDefault'>
				{text}
			</label>
			<input
				className='form-check-input custom-toggle ms-2 m-0'
				type='checkbox'
				role='switch'
				id='flexSwitchCheckDefault'
				onChange={handleChange}
				checked={checked}
			/>
		</div>
	);
};
export default Toggle;
