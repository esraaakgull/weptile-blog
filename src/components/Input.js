import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Input = React.forwardRef(
	(
		{ id, type, name, value, placeholder, className, onChange, onClick, onBlur, disabled },
		ref
	) => {
		return (
			<input
				id={id}
				type={type}
				name={name}
				value={value}
				className={classNames('form-control bg-transparent', className)}
				placeholder={placeholder}
				ref={ref}
				onChange={onChange}
				onClick={onClick}
				onBlur={onBlur}
				disabled={disabled}
			/>
		);
	}
);
Input.propTypes = {
	type: PropTypes.string,
	name: PropTypes.string,
	placeholder: PropTypes.string,
	className: PropTypes.string,
	required: PropTypes.bool,
};
Input.defaultProps = {
	type: 'text',
	required: false,
};
export default Input;
