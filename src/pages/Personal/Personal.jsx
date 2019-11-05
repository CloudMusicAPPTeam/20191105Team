import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Info from './Info';
import Login from './Login';
import Order from './Order';
import Collect from './Collect';

class Personal extends React.Component {
	render() {
		return <Switch>
			<Route path='/personal' component={Info} exact />
			<Route path='/personal/login' component={Login} />
			<Route path='/personal/order' component={() => {
				// 验证是否登录
				return <Order />;
			}} />
			<Route path='/personal/collect' component={() => {
				return <Collect />;
			}} />
		</Switch>;
	}
}

export default Personal;