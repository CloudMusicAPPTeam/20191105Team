import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink, withRouter } from 'react-router-dom';
import "./Find.less";
import FindMain from './FindMain';
import FindNav from './FindNav';
import Banner from '../../components/Banner';

class Find extends React.Component {
	render() {
		return <div className="main-box">
			<Banner />
			<FindNav />
			<FindMain />
		</div>
	}
}

export default Find;