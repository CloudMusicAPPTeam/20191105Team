import React, { Component } from 'react';
import {Link,HashRouter} from 'react-router-dom';
import MainPlateBanner from '../../components/mainPlateBanner';
import './Personal.less';
import '../../assets/iconfont/iconfont.css';

import { Collapse, Icon } from 'antd';
const { Panel } = Collapse;
const genExtra = () => (
	<Icon
		type="menu"
		onClick={event => {
			// event.stopPropagation();
		}}
	/>
);

class Personal extends Component {
	render() {
		return <HashRouter>
			<div className="main-body">
				{/* 类似轮播图的组件 */}
				<MainPlateBanner />
			</div>
			<div className='banner'>
				<div className='bannerLi'>
					<i className='iconfont icon-yinyue'></i>
					<Link to="/localmusic" className='outsideSpan'>
						本地音乐<span className='insideSpan'>(300)</span>
					</Link>
				</div>
				<div className='bannerLi'>
					<i className='iconfont icon-zuijinbofang'></i>
					<a className='outsideSpan'>
						最近播放
						<span className='insideSpan'>(60)</span>
					</a>
				</div>
				<div className='bannerLi'>
					<i className='iconfont icon-xiazaimoban'></i>
					<a className='outsideSpan'>
						下载管理
						<span className='insideSpan'>(0)</span>
					</a>
				</div>
				<div className='bannerLi'>
					<i className='iconfont icon-diantai'></i>
					<a className='outsideSpan'>
						我的电台
						<span className='insideSpan'>(0)</span>
					</a>
				</div>
				<div className='bannerLi'>
					<i className='iconfont icon-wodeshoucang'></i>
					<a className='outsideSpan5'>
						我的收藏
						<span className='insideSpan'>(专辑/歌手/视频/Mlog)</span>
					</a>
				</div>
			</div>
			<div className='songSheet'>
				<Collapse accordion>
					<Panel header="创建的歌单" key="1" extra={genExtra()}>
						<div className='mainPart'>
							<div className='leftBox'>
								<img src={require('../../assets/images/mainplate/likeMusicBg.jpg')} alt="" />
								<span className='likeMusic'>
									我喜欢的音乐
							</span>
								<span className='musicNum'>
									75首
							</span>
							</div>
							<div className='rightBox'>
								<div className='rightInsideBox'>
									<i className='iconfont icon-xindong'></i>
									<span>心动模式</span>
								</div>
							</div>
						</div>
					</Panel>
				</Collapse>
				<div className='jietu'>
					<div className='jietuInside'>
						<i className='iconfont icon-jietu'></i>
						<span>截图导入歌单</span>
					</div>
				</div>
			</div>
		</HashRouter>;
		
	}
}

export default Personal;