import React from 'react';
import { Link,NavLink, withRouter } from 'react-router-dom';
import './Tab.less';
import System from './system';
import '../assets/images/sousuo/iconfont.css'




function Tab(props) {
	let pathName = props.location.pathname,
		flag = /(SEARCH|LOGIN)/i.test(pathName);
	return <>

		{flag ? null : <div className='tab'>
				<System></System>
			<Link className="link" to='/personal'>
				<span>我的</span>
			</Link>
			<NavLink className="link" to='/' exact>
				<span>发现</span>
			</NavLink>
			<NavLink className="link" to='/cloud'>
				<span>云村</span>
			</NavLink>
			<NavLink className="link" to='/video'>
				<span>视频</span>
			</NavLink>
			<NavLink className="link sousuo" to='/search'>
				<i className="icon-search iconfont"></i>
			</NavLink>

		</div>}

	</>;
}
export default withRouter(Tab);