import React from 'react';
import Calendar from './calendar';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="home">
				<Calendar />
			</div>
		);
	}
}