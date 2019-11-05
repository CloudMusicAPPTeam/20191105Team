import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './Header.less';

function Header(props) {
	return <div className="main-header">
		<div className="logo-box">
			<img src={require('../../assets/images/navi_title_v2.png')} alt="" />
		</div>
		<div className="search-box"
			onClick={ev => {
				props.history.push('/search');
			}}>
			<img src="https://static.home.mi.com/youpin/static/m/res/images/home_search.png" alt="" />
			<span>年货嗨抢，最高直降1000</span>
		</div>
		<div className="msg-box"
			style={{
				visibility: 'hidden'
			}}>
			<div className="msg"></div>
		</div>
	</div>;
}
export default withRouter(Header);