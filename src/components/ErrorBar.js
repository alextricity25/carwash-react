import React from 'react';
import PropTypes from 'prop-types';

function ErrorBar(props) {

	const error_text = (
		<div>
		  <a alt="error">{ props.error_text }</a>
		</div>
	);

	return <div>{error_text}</div>;
}

export default ErrorBar;

ErrorBar.propTypes = {
	error_text: PropTypes.string.isRequired,
};
