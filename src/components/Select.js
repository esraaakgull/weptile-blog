import React from 'react';

const Select = ({ name, options, onChange, className, value}) => {
	return (
		<select name={name} className={className} onChange={onChange} value={value}>
			{options?.map((item, index) => (
				<option value={item.id} key={`option${index}`}>
					{item.name}
				</option>
			))}
		</select>
	);
};
export default Select;
