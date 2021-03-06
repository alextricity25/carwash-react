import React, { Component } from 'react';
import Nav from './components/Nav';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import ListWashesComponent from './components/ListWashesComponent';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displayed_form: '',
			logged_in: localStorage.getItem('token') ? true: false,
			username: '',
			error_text: '',
			displayed_viewport: ''
		};
	}

	componentDidMount() {
		if (this.state.logged_in) {
			fetch('http://localhost:8000/rest-auth/user/',{
				headers: {
					Authorization: `JWT ${localStorage.getItem('token')}`
				}
			})
			  .then(res => res.json())
			  .then(json => {
				  this.setState({ username: json.username });
			  });
		}
	}


	handle_login = (e, data) => {
		e.preventDefault();
		fetch('http://localhost:8000/rest-auth/login/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
		.then(res => {
			if(res.ok) {
				return res.json();
			} else {
				throw Error(`Request rejected with status ${res.status}`);
			}
		})
		.then(json => {
			localStorage.setItem('token', json.token);
			this.setState({
				logged_in: true,
				displayed_form: '',
				username: json.user.username,
				error_text: ''
			});
		})
		.catch( err => {
				this.setState({
					error_text: err.message
				});
				console.error(err);
			}
		);
	};

	handle_signup = (e, data) => {
		e.preventDefault();
		fetch('http://localhost:8000/rest-auth/registration/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
		.then(res => res.json())
		.then(json => {
			localStorage.setItem('token', json.token);
			this.setState({
				logged_in: true,
				displayed_form: '',
				username: json.user.username
			});
		});
	};

	handle_logout = () => {
		localStorage.removeItem('token');
		this.setState({ logged_in: false, username: '', displayed_viewport: '' });
	};

	display_form = form => {
		this.setState({
			displayed_form: form
		});
	};

	display_viewport = viewport => {
		this.setState({
			displayed_viewport: viewport
		});
	};

	render() {
		let form;
		let viewport;

		switch (this.state.displayed_form) {
			case 'login':
				form = <LoginForm handle_login={this.handle_login} />;
				break;
			case 'signup':
				form = <SignupForm handle_signup={this.handle_signup} />;
				break;
			default:
				form = null;
		}

		switch (this.state.displayed_viewport) {
			case 'list_washes':
				viewport = <ListWashesComponent />;
				break;
			default:
				viewport = null;
		}


		return (
			<div className="App">
			  <Nav
			    logged_in={this.state.logged_in}
			    display_form={this.display_form}
			    handle_logout={this.handle_logout}
			    error_text={this.state.error_text}
			    display_viewport={this.display_viewport}
			  />
			  {form}
			  <h3>
			    {this.state.logged_in
				    ? `Hello, ${this.state.username}`
				    : 'Please Log In'}
			  </h3>
			  {viewport}
			</div>
		);
	}
}

export default App;
