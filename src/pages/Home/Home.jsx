import React from 'react';
import { connect } from 'react-redux';
import './Home.less';
import Header from './Header';


function Home(props) {
	return <div className='main-box'>
		{/* 头部 */}
		<Header />

		
	</div>;
}

export default Home;