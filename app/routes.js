import React from 'react';
import { 
    BrowserRouter as Router, 
    Route, 
    Redirect, 
    Switch 
} from 'react-router-dom';

import Home from 'components/home';
import Week from 'components/week';
import NotFound from 'components/404';

const Routes = (props) => (
    <Router {...props} >
        <div className="main-content">
            <Switch>
                <Route exact path='/' render={() => (
                    <Redirect to='/home'/>
                )}/>
                <Route exact path='/home' render={() => (
                    <Home loggedIn={props.loggedIn} />
                )} />
                <Route path='/week/:week' render={(e) => {
                    const date = e.location.pathname.slice(e.location.pathname.lastIndexOf('/') + 1).split("-");
                    const year = date[0];
                    const week = date[1];
                    
                    if (Number(year) >= 2017 && Number(year) <= new Date().getFullYear() && Number(week) >= 1 && Number(week) <= 52) {
                        return (
                            <Week week={week} year={year} loggedIn={props.loggedIn} userID={props.userID} />
                        );
                    } else {
                        return <NotFound />
                    }
                }} />
                <Route path='*' component={NotFound} />
            </Switch>
        </div>
    </Router>
)

export default Routes;