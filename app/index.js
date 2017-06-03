import ReactDOM from 'react-dom';
import React from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import Routes from 'routes';
import HeaderNav from 'components/header-nav';

const history = createBrowserHistory();

document.addEventListener('DOMContentLoaded', () => {

    $.get('/db/user', (data) => {
      const loggedIn = typeof data === "object";
      const username = data ? data.google.displayName : '';
      const userID = data ? data.id : '';

      ReactDOM.render(
        <div id='app'>
          <HeaderNav loggedIn={loggedIn} username={username} />
          <Routes history={history} loggedIn={loggedIn} userID={userID} />
        </div>, 
        document.querySelector('#root')
      );
    });
    
});