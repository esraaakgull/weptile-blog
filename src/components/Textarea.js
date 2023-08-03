import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Textarea = ({ id, name, cols, rows, placeholder, className, disabled, handleClick }) => {
	return (
		<textarea
			id={id}
			name={name}
			cols={cols}
			rows={rows}
			placeholder={placeholder}
			className={classNames('form-control bg-transparent', className)}
			disabled={disabled}
			onClick={handleClick}
		/>
	);
};
Textarea.propTypes = {
	cols: PropTypes.string,
	rows: PropTypes.string,
};
Textarea.defaultProps = {
	cols: '30',
	rows: '3',
};
export default Textarea;
