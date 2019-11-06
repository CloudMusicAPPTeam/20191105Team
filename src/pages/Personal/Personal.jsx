import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import './Personal.less';
import MainPlateBanner from '../../components/mainPlateBanner';

class Personal extends React.Component {
	render() {
		return <>
			<div className="main-body">
				{/* 类似轮播图的组件 */}
				<MainPlateBanner />
			</div>
			<div className='banner'>
				<div>
					<i></i>
					<span>本地音乐(300)</span>
				</div>
				<div>
					<i></i>
					<span>最近播放(60)</span>
				</div>
				<div>
					<i></i>
					<span>下载管理(0)</span>
				</div>
				<div>
					<i></i>
					<span>我的电台(0)</span>
				</div>
				<div>
					<i></i>
					<span>我的收藏(专辑/歌手/视频/Mlog)</span>
				</div>
			</div>
			<div className='songSheet'></div>
		</>;
	}
}

export default Personal;