import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import './Personal.less';
import MainPlateBanner from '../../components/mainPlateBanner';
import '../../assets/iconfont/iconfont.css';

class Personal extends React.Component {
	render() {
		return <>
			<div className="main-body">
				{/* 类似轮播图的组件 */}
				<MainPlateBanner />
			</div>
			<div className='banner'>
				<div className='bannerLi'>
					<i className='iconfont icon-yinyue'></i>
					<span className='outsideSpan'>
						本地音乐<span className=' insideSpan'>(300)</span>
					</span>
				</div>
				<div className='bannerLi'>
					<i className='iconfont icon-zuijinbofang'></i>
					<span className='outsideSpan'>
						最近播放
						<span className=' insideSpan'>(60)</span>
					</span>
				</div>
				<div className='bannerLi'>
					<i className='iconfont icon-xiazaimoban'></i>
					<span className='outsideSpan'>
						下载管理
						<span className=' insideSpan'>(0)</span>
					</span>
				</div>
				<div className='bannerLi'>
					<i className='iconfont icon-diantai'></i>
					<span className='outsideSpan'>
						我的电台
						<span className=' insideSpan'>(0)</span>
					</span>
				</div>
				<div className='bannerLi'>
					<i className='iconfont icon-wodeshoucang'></i>
					<span className='outsideSpan5'>
						我的收藏
						<span className=' insideSpan'>(专辑/歌手/视频/Mlog)</span>
					</span>
				</div>
			</div>
			<div className='songSheet'>
				<div className='setUpTitle'>
					<i className="iconfont icon-xiala"></i>
					<span className='outsideSpan'>
						创建的歌单
						<span className='insideSpan'>(1)</span>
					</span>
					<div className='rightBox'>
						<i className='iconfont icon-jiahao iconfontPlus'></i>
						<i className='iconfont icon--ellipsis iconfontMore'></i>
					</div>
				</div>
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
				<div className='jietu'>
					<div className='jietuInside'>
						<i className='iconfont icon-jietu'></i>
						<span>截图导入歌单</span>
					</div>

				</div>
			</div>
		</>;
	}
}

export default Personal;