import React from 'react';
import 'antd/dist/antd.css';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider, Tabs } from 'antd';
import './Cloud.less';
import '../../assets/css/reset.min.css'
import axios from '../../api/axios';
import WaterFall from '../../components/waterFall';
import ShiPin from './codeShipin';
import Dynamic from './Dynamic';

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
									<span>今日最戳心评论，你看过几条？</span>
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
						<WaterFall />
					</div>
					<ShiPin></ShiPin>
				</TabPane>
				<TabPane tab="动态" key="2">
					<Dynamic />
    			</TabPane>
			</Tabs>
		</ConfigProvider>;
	}
	componentDidMount() {
		axios.get('/waterfall/list', item => {
			console.log(item.data);
		});
	}	
}

export default Cloud;