import React from 'react';

const FormField = ({ divClass, labelClass, labelText, id, children }) => {
	return (
		<div className={divClass}>
			<label className={labelClass} htmlFor={id}>
				{labelText}
			</label>
			{children}
		</div>
	);
};
export default FormField;
