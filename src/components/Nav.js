import React from 'react';
import PropTypes from 'prop-types';
import Cw from "./cw";
import ErrorBar from "./ErrorBar";

function Nav(props) {
	const logged_out_nav = (
		<div class="navbar gray highlightTextIn">
		  <a alt="LOGIN" onClick={() => props.display_form('login')}>LOGIN</a>
		  <a alt="SIGNUP" onClick={() => props.display_form('signup')}>SIGNUP</a>
		</div>
	);

	const logged_in_nav = (
		<div class="navbar gray highlightTextIn">
		  <a alt="LOGOUT" onClick={props.handle_logout}>LOGOUT</a>
		  <a alt="LIST WASHES" onClick={() => props.display_viewport('list_washes')}>LIST WASHES</a>
		</div>
	);

	return (
	<div>
	  <Cw />
	  <ErrorBar
	    error_text={props.error_text}
	  />
	  {props.logged_in ? logged_in_nav : logged_out_nav}
	</div>
	);
}

export default Nav;

Nav.propTypes = {
	logged_in: PropTypes.bool.isRequired,
	display_form: PropTypes.func.isRequired,
	handle_logout: PropTypes.func.isRequired,
	display_viewport: PropTypes.func.isRequired,
	error_text: PropTypes.string.isRequired
};
