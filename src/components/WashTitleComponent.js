import React from 'react';
import PropTypes from 'prop-types';
import "./css/wash_title_component.css";

function WashTitleComponent(props) {

	const wash_title = (
		<ul class="wash-row">
		  <li>{ props.title } -</li>
		  <li>- { props.owner }</li>
		</ul>
	);

	return <div class="wash-title-row-background">{wash_title}</div>;
}

export default WashTitleComponent;

WashTitleComponent.propTypes = {
	title: PropTypes.string.isRequired,
	owner: PropTypes.string.isRequired,
};
