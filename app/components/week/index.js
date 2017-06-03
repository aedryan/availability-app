import React from 'react';
import Util from 'util';
import IO from 'socket.io-client';

const socket = IO();

export default class Week extends React.Component {
	constructor(props) {
		const param = window.location.href.slice(window.location.href.lastIndexOf("/") + 1).split("-");
		super(props);
		this.state = {
			year: Number(param[0]),
			week: Number(param[1]),
			weekData: null,
		}
		this.getWeekData();

		socket.on('receive player', (data) => {
			this.setState(() => {
				return {
					weekData: data
				}
			})
		});
	}

	getWeekData() {
		$.get('/db/week/' + this.state.week, (data) => {
			this.setState(() => {
				return {
					weekData: data
				};
			});
		});
	}

	clickDay(name) {
		if (this.props.loggedIn) {
			name = name.toLowerCase();
			$.post('/db/update/' + this.state.week + '/player', { day: name }, (data) => {
				socket.emit('player event', data);
				this.setState(() => {
					return {
						weekData: data
					};
				});
			});
		}
	}

	days() {
		const names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		const days = names.map((name) => {
			let players = [];
			let className = "day clearfix";
			if (this.state.weekData) {
				players = this.state.weekData[name.toLowerCase()].map((player) => {
					return (
						<img title={player.name} src={player.photo} key={player.id} />
					);
				});
			}
			return (
				<div className={this.props.loggedIn ? (className + " clickable") : className} key={name} onClick={() => this.clickDay(name)}>
					<div className="day-title">{name}</div>
					<div className="players">{players}</div>
				</div>
			)
		})

		return (
			<div className="days">{days}</div>
		)
	}

	getWeekName() {
		const standardStr = "Week " + this.state.week + " of " + this.state.year;

		if (new Date().getFullYear() === this.state.year) {
			const week = this.state.week;
			const weekOfYear = Util.weekOfYear();

			if (week === weekOfYear) {
				return "This Week";
			} else if (week + 1 === weekOfYear) {
				return "Last Week";
			} else if (week - 1 === weekOfYear) {
				return "Next Week";
			} else {
				return standardStr;
			}
		} else {
			return standardStr
		}
	}

	render() {
		const title = this.getWeekName();
		
		return (
			<div id="week">
                <h2>{title}</h2>
				<h3>{this.props.loggedIn ? 'Select the days that work for you!' : 'Log in to mark your availability'}</h3>
				{this.days()}
				<h6>{this.props.loggedIn ? 'Select a day again to remove your availability.' : ''}</h6>
				<h6>Hover over an image their name.</h6>
			</div>
		);
	}
}