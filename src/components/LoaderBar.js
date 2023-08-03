import PropTypes from 'prop-types';
import React from 'react';
import BarLoader from 'react-spinners/BarLoader';

import colors from '../constants/colors';
import settings from '../helpers/settings';

const LoaderBar = ({ bg, loaderColor, loaderSize, message }) => {
	return (
		<div
			className='d-flex justify-content-center align-items-center min-vh-100 '
			style={{ background: bg }}>
			{message && (
				<>
					<h5 className='p-2'> {message} </h5>
				</>
			)}
			<div>
				<BarLoader
					color={loaderColor}
					cssOverride={null}
					speedMultiplier={1}
					loading={true}
					size={loaderSize}
					aria-label='Loading Spinner'
					data-testid='loader'
				/>
			</div>
		</div>
	);
};

LoaderBar.propTypes = {
	bg: PropTypes.string,
	loaderColor: PropTypes.string,
	loaderSize: PropTypes.number,
};

LoaderBar.defaultProps = {
	bg: colors.LOADER_BAR_BG,
	loaderColor: colors.LOADER_BAR_COLOR,
	loaderSize: settings.LOADER_BAR_SIZE,
};

export default LoaderBar;
