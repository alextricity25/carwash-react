import React from 'react';
import PropTypes from 'prop-types';

function WashTitleComponent(props) {

	const wash_title = (
		<div>
		  <a alt="title">Title:</a>
		  <a alt="title">{ props.title }</a>
		  <a alt="owner">Owner:</a>
		  <a alt="owner">{ props.owner }</a>
		</div>
	);

	return <div>{wash_title}</div>;
}

export default WashTitleComponent;

WashTitleComponent.propTypes = {
	title: PropTypes.string.isRequired,
	owner: PropTypes.string.isRequired,
};