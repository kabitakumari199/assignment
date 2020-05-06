import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from './Components/LoginPage/LoginPage';
import RegisterPage from './Components/RegisterPage/RegisterPage';
import Myhome from './Components/Myhome/Home';
import Logout from './Components/Logout/Logout';

class Routing extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={LoginPage} />
					<Route exact path="/register" component={RegisterPage} />
					<Route exact path="/myhome" component={Myhome} />
					<Route exact path="/logout" component={Logout} />
				</Switch>
			</Router>
		)
	}
}

export default Routing;
