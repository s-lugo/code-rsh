import React from 'react';
import { Route, IndexRoute } from 'react-router';
import AppContainer from '../components/AppContainer.js';
import Landing from '../pages/Landing.js';
import Home from '../pages/Home.js';
import Practice from '../pages/Practice.js';
import Profile from '../pages/Profile.js';
import Leaderboards from '../pages/Leaderboards.js';
import Container from '../components/Container.js';

const routes = (
    <Route path="/" component={AppContainer}>
			<IndexRoute component={Landing} />
			<Route component={Container} >
				<Route path="home" component={Home} />
				<Route path="practice" component={Practice} />
				<Route path="leaderboards" component={Leaderboards} />
				<Route path="profile" component={Profile} />
			</Route>
    </Route>
);

export default routes;
