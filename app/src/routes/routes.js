import React from 'react';
import { Route } from 'react-router';
import Landing from '../pages/Landing.js';
import Home from '../pages/Home.js';
import Practice from '../pages/Practice.js';
import Profile from '../pages/Profile.js';
import Leaderboards from '../pages/Leaderboards.js';
import Login from '../pages/Login.js';
import Container from '../components/Container.js';

const routes = (
    <Route path="/" component={Landing}>
			<Route component={Container} >
				<Route path="home" component={Home} />
				<Route path="practice" component={Practice} />
				<Route path="leaderboards" component={Leaderboards} />
				<Route path="profile" component={Profile} />
			</Route>
    </Route>
);

export default routes;