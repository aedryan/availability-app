import React from 'react';
import Util from 'util';

export default class HeaderNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: props.username
        };
    }

    getLoginElem() {
        if (this.props.loggedIn) {
            const week = Util.weekOfYear();
            const thisYear = new Date().getFullYear();
            const thisWeek = thisYear + "-" + week;
            const nextWeek = thisYear + "-" + Number(week + 1);

            return (
                <div className="dropdown">
                    <a className="dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        <span>{this.state.username}</span>
                        <span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li><a href="/home">Home</a></li>
                        <li role="separator" className="divider"></li>
                        <li><a href={"/week/" + thisWeek}>This Week</a></li>
                        <li><a href={"/week/" + nextWeek}>Next Week</a></li>
                        <li role="separator" className="divider"></li>
                        <li><a href="/auth/logout">Log Out</a></li>
                    </ul>
                </div>
            );
        } else {
            return (
                <a href='/auth/google'>Log in with Google</a>
            );
        }
    }

	render() {
		return (
			<div id="header-nav">
                <a href='/home'>When Can You Game?</a>
                {this.getLoginElem()}
            </div>
		);
	}
}