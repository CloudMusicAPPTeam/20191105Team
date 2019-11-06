import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './Tab.less';

function Tab(props) {
	let pathName = props.location.pathname,
		flag = /(SEARCH|LOGIN)/i.test(pathName);
	return <>
		{flag ? null : <div className='tab'>
			<NavLink className="link" to='/login'>
				<i className="icon"></i>
				<span>设置</span>
			</NavLink>
			<NavLink className="link" to='/personal'>
				<i className="icon"></i>
				<span>我的</span>
			</NavLink>
			<NavLink className="link" to='/' exact>
				<i className="icon"></i>
				<span>发现</span>
			</NavLink>
			<NavLink className="link" to='/cloud'>
				<i className="icon"></i>
				<span>云村</span>
			</NavLink>
			<NavLink className="link" to='/video'>
				<i className="icon"></i>
				<span>视频</span>
			</NavLink>
			<NavLink className="link" to='/search'>
				<i className="icon"></i>
				<span>搜索</span>
			</NavLink>
		</div>}
	</>;
}
export default withRouter(Tab);