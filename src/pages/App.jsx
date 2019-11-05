import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from './Home/Home';
import Classify from './Classify/Classify';
import Taste from './Taste/Taste';
import Cart from './Cart/Cart';
import Pay from './Pay/Pay';
import Detail from './Detail/Detail';
import Personal from './Personal/Personal';
import Search from './Search/Search';
import Tab from '../components/Tab';

/* 导入公共的样式 */
import '../assets/css/reset.min.css';
import '../assets/css/common.less';

export default class App extends React.Component {
	render() {
		return <HashRouter>
			<Switch>
				<Route path='/' component={Home} exact />
				<Route path='/classify' component={Classify} />
				<Route path='/taste' component={Taste} />
				<Route path='/cart' component={Cart} />
				<Route path='/pay' component={Pay} />
				<Route path='/detail/:id' component={Detail} />
				<Route path='/search' component={Search} />
				<Route path='/personal' component={Personal} />
				<Redirect to='/' />
			</Switch>

			{/* 公共的底部导航 */}
			<Tab />
		</HashRouter>;
	}
}