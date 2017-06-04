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
			danger: false
		}
		this.getWeekData();
		socket.on('receive player', (data) => {
			this.setState(() => {
				return {
					weekData: data
				}
			});
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

	clickDay(e, name) {
		
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
		} else {
			this.setState(() => {
				return {
					danger: true
				};
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
					return <Player player={player} key={player.id} />;
				});
			}
			className += this.props.loggedIn ? " clickable" : "";
			return (
				<div className={className} key={name} onClick={(e) => this.clickDay(e, name)}>
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
		const h3Class = this.state.danger ? "alert-danger" : "alert-warning";
		
		return (
			<div id="week">
                <h2>{title}</h2>
				<h3 className={this.props.loggedIn ? "" : ("alert " + h3Class)}>{this.props.loggedIn ? 'Select the days that work for you! Select again to toggle "maybe" or remove yourself.' : 'Log in to mark your availability'}</h3>
				{this.days()}
				<h6>Hover over an image to see their name.</h6>
			</div>
		);
	}
}

class Player extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const maybe = this.props.player.maybe ? " maybe" : "";

		return (
			<div className={"player-container" + maybe} key={this.props.player.id} >
				<img title={this.props.player.name} src={this.props.player.photo} />
			</div>
		)
	}
}