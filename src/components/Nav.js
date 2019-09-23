import React from 'react';
import PropTypes from 'prop-types';
import Cw from "./cw";

function Nav(props) {
	const logged_out_nav = (
/*		<ul>
		  <li onClick={() => props.display_form('login')}>login</li>
		  <li onClick={() => props.display_form('signup')}>signup</li>
		</ul>
*/
		<div class="navbar gray highlightTextIn">
		  <a alt="LOGIN" onClick={() => props.display_form('login')}>LOGIN</a>
		  <a alt="SIGNUP" onClick={() => props.display_form('signup')}>SIGNUP</a>
		</div>
	);

	const logged_in_nav = (
		<div class="navbar gray highlightTextIn">
		  <a alt="LOGOUT" onClick={props.handle_logout}>LOGOUT</a>
		</div>
	);

	return <div><Cw />{props.logged_in ? logged_in_nav : logged_out_nav}</div>;
}

export default Nav;

Nav.propTypes = {
	logged_in: PropTypes.bool.isRequired,
	display_form: PropTypes.func.isRequired,
	handle_logout: PropTypes.func.isRequired
};
