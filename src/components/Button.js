import classNames from 'classnames';
import PropTypes from 'prop-types';

const Button = ({ id, type, className, onClick, children, title, disabled }) => {
	return (
		<button
			type={type}
			id={id}
			disabled={disabled}
			className={classNames('btn', className)}
			onClick={onClick}
			title={title}>
			{children}
		</button>
	);
};
Button.propTypes = {
	id: PropTypes.string,
	className: PropTypes.string,
	title: PropTypes.string,
	disabled: PropTypes.bool,
	type: PropTypes.string,
};
Button.defaultProps = {
	className: 'btn-dark',
	title: null,
	disabled: false,
	type: 'button',
};

export default Button;
