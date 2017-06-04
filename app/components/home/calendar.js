import React from 'react';
import Util from 'util';

const minDate = new Date(2017, 0, 1);

export default class Calendar extends React.Component {
	constructor(props) {
		super(props);
	}

    weeks(year) {
        const weeks = [];
        const week = Util.weekOfYear();
        let freshClass = "fresh";
        let className = "";
        let name = "";

        for (var i = 1; i <= 52; i++) {
            className = "";

            if (i === week) {
                name = "This Week";
                className += "this-week";
            } else if (i + 1 === week) {
                name = "Last Week";
            } else if (i - 1 === week) {
                name = "Next Week";
            } else {
                name = "Week " + i;
            }

            if (i >= week && year === new Date().getFullYear()) {
                className += className.length > 0 ? (" " + freshClass) : freshClass;
            }
            
            weeks.push(<a href={"week/" + year + "-" + i} key={"Week-" + i} className={className}>{name}</a>)
        }

        return (
            <div className="weeks container-fluid">
                {weeks}
            </div>
        )
    }

    year() {
        const years = [];
        const thisYear = new Date().getFullYear();
        const minYear = minDate.getFullYear();
        const diff = thisYear - minYear;
        let year;

        for (var i = diff; i >= 0; i--) {
            year = minYear + i;
            years.push(
                <div key={year}>
                    <h2>{year}</h2>
                    {this.weeks(year)}
                </div>
            )
        }

        return <div className="year">{years}</div>;
    }

	render() {
        const week = Util.weekOfYear();
        const thisYear = new Date().getFullYear();
        const thisWeek = thisYear + "-" + week;
        const nextWeek = thisYear + "-" + Number(week + 1);

		return (
			<div className="calendar">
                <div className="well well-lg">
                    <h2>When Can You Game?</h2>
                    <p>Select a week to let us know when you're available</p>
                    <div className="header-weeks">
                        <a className="btn btn-primary" href={"week/" + thisWeek}>This Week</a>
                        <a className="btn btn-primary" href={"week/" + nextWeek}>Next Week</a>
                    </div>
                </div>

                
                {this.year()}
            </div>
		);
	}
}