import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './Login/Login';
import Personal from './Personal/Personal';
import Find from './Find/Find';
import Cloud from './Cloud/Cloud';
import Video from './Video/Video';
import Search from './Search/Search';
import Tab from '../components/Tab';
import LocalMusic from './TwoLevelPage/LocalMusic/localmusic';
import XiangXi from './Find/xiangxi/xiangxi';
/* 导入公共的样式 */
import '../assets/css/reset.min.css';
import '../assets/css/common.less';

export default class App extends React.Component {
	render() {
		return <HashRouter>
			{/* 公共的头部导航 */}
			<Tab />

			<Switch>
				<Route path='/' component={Find} exact />
				<Route path='/login' component={Login} />}
				<Route path='/personal' component={Personal} />
				<Route path='/cloud' component={Cloud} />
				<Route path='/video' component={Video} />
				<Route path='/search' component={Search} />
				<Route path='/localmusic' component={LocalMusic} />
				<Route path='/xiangxi' component={XiangXi}/>
				<Redirect to='/' />
			</Switch>
		</HashRouter>;
	}
}