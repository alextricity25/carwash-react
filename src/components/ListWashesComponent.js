import React from 'react';
import PropTypes from 'prop-types';
import WashComponent from "./WashComponent"

class ListWashesComponent extends React.Component {
	state = {
		washes: []
	};

	componentDidMount() {
		fetch('http://localhost:8000/washes/', {
			method: 'GET',
			headers: {
				Authorization: `JWT ${localStorage.getItem('token')}`,
				'Content-Type': 'application/json'
			}
		})
		.then(res => res.json())
		.then(json => {
			var washes_list = []
			for (var value of json) {
				washes_list.push(<WashComponent title={value.title} owner={value.owner} />)
			}
			this.setState({
				washes: washes_list
			});
			});
	}

	render() {
		return(
			<div class="listwashes">
			  <h4>YOUR WASHES:</h4>
			  {this.state['washes']}
			</div>
			)
	}
}

export default ListWashesComponent;
