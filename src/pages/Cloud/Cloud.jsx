import React, { Component } from 'react';
import { connect } from 'react-redux'
import 'antd/dist/antd.css';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider, Tabs } from 'antd';
import './Cloud.less';
import '../../assets/css/reset.min.css'

const { TabPane } = Tabs;

class Cloud extends React.Component {
	render() {
		return <ConfigProvider locale={zhCN}>
			<Tabs defaultActiveKey="1">
				<TabPane tab="广场" key="1">
					<div className='hotComment'>
						<div className='commentWall'>
							<div className='leftBox'>
								<div className='topBox'>
									<span>云村热评墙</span>
									<i className='iconfont icon-qianjing-'></i>
								</div>
								<div className='mybottomBox'>
									<span>罗英达，今日最戳心评论，你看过几条？</span>
								</div>
							</div>
							<div className='rightBox'>
								<span className='topSpan'>
									Nov.
								</span>
								<span className='bottomSpan'>
									06
								</span>
							</div>
						</div>
						<div className='waterFall'>
							<div className='leftBox'>
								<img className='imgBig' src={require('../../assets/images/mainplate/likeMusicBg.jpg')} alt="" />
								<div className='topBox'>
									<p>从锦鲤抄到妙笔浮生，从物体到月球，银临然购物见到了一个又一个独特的身影。</p>
									<div className='btmBox'>
										<img className='imgSmall' src={require('../../assets/images/mainplate/likeMusicBg.jpg')} alt="" />
										<span>银幕轻尘</span>
										<span>2453赞</span>
									</div>
								</div>
							</div>
							<div className='rightBox'>
								<img className='imgBig' src={require('../../assets/images/mainplate/likeMusicBg.jpg')} alt="" />
								<div className='topBox'>
									<p>从锦鲤抄到妙笔浮生，从物体到月球，银临然购物见到了一个又一个独特的身影。哈哈哈哈哈哈哈</p>
									<div className='btmBox'>
										<img className='imgSmall' src={require('../../assets/images/mainplate/likeMusicBg.jpg')} alt="" />
										<span className='leftSpan'>银幕轻尘</span>
										<span className='rightSpan'>2453赞</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</TabPane>
				<TabPane tab="动态" key="2">
					动态
    			</TabPane>
			</Tabs>
		</ConfigProvider>;
	}
	componentDidMount() {
		let waterFall = () => {
			let pageH = window.innerHeight;
		}
	}
}

export default Cloud;