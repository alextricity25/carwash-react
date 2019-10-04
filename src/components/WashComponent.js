import React from 'react';
import PropTypes from 'prop-types';
import WashTitleComponent from "./WashTitleComponent"

function WashComponent(props) {

	const wash_component= (
		<div>
		</div>
	);

	return (
	  <div>
	    <WashTitleComponent
	      title={props.title}
	      owner={props.owner}
	    />
	  </div>
	);
}

export default WashComponent;

WashComponent.propTypes = {
	title: PropTypes.string.isRequired,
	owner: PropTypes.string.isRequired
};