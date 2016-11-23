import React from 'react';
import { Route, IndexRoute } from 'react-router';
import AppContainer from '../components/AppContainer.js';
import CoursesContainer from '../containers/CoursesContainer.js';
import Landing from '../pages/Landing.js';
import Home from '../pages/Home.js';
import Profile from '../pages/Profile.js';
import Login from '../pages/Login.js';
import Practice from '../pages/Practice.js';
import Leaderboards from '../pages/Leaderboards.js';
import Container from '../components/Container.js';
import AuthService from '../utils/AuthService.js';

const auth = new AuthService(process.env.REACT_APP_AUTH0_CLIENT_ID, process.env.REACT_APP_AUTH0_DOMAIN);

const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
  }
}

const routes = (
    <Route path="/" component={AppContainer} auth={auth}>
			<IndexRoute component={Landing} />
			<Route path="login" component={Login} />
			<Route component={Container} onEnter={requireAuth}>
				<Route path="home" component={Home} />
				<Route path="practice" component={Practice} />
				<Route path="practice/:language" component={Home} />
				<Route path="leaderboards" component={Leaderboards} />
				<Route path="profile" component={Profile} />
			</Route>
    </Route>
);

export default routes;