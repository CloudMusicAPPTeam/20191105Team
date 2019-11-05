import React from 'react';
import { connect } from 'react-redux';
import './Home.less';
import Header from './Header';
import Banner from '../../components/Banner';

function Home(props) {
	return <div className='main-box'>
		{/* 头部 */}
		<Header />

		<div className="main-body">
			{/* 轮播图 */}
			<Banner />
			
		</div>
	</div>;
}

export default Home;