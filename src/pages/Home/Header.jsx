import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import './Header.less';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider, Input, Button,Checkbox } from 'antd';

function Header(props) {
	return <ConfigProvider locale={zhCN}>

		

	</ConfigProvider>

	
}
export default withRouter(Header);