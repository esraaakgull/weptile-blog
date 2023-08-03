import PropTypes from 'prop-types';
import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

import colors from '../constants/colors';
import settings from '../helpers/settings';

const LoaderClip = ({ bg, loaderColor, loaderSize, message }) => {
	return (
		<div
			className='d-flex justify-content-center align-items-center min-vh-100'
			style={{ background: bg }}>
			{message && (
				<>
					<h5 className='p-2'> {message} </h5>
				</>
			)}
			<div>
				<ClipLoader
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

LoaderClip.propTypes = {
	bg: PropTypes.string,
	loaderColor: PropTypes.string,
	loaderSize: PropTypes.number,
};

LoaderClip.defaultProps = {
	bg: colors.LOADER_CLIP_BG,
	loaderColor: colors.LOADER_CLIP_COLOR,
	loaderSize: settings.LOADER_CLIP_SIZE,
};

export default LoaderClip;
