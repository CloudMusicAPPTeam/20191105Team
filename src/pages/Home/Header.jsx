import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import './Header.less';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider, Input, Button,Checkbox } from 'antd';

function Header(props) {
	return <ConfigProvider locale={zhCN}>

		<div className='loginBox' >
			<div className="main-header">
			</div>
			<div className='login-input'>
				<Input placeholder="输入账号" />
				<br />
				<Input.Password placeholder="输入密码" />
			</div>

			<Button>登录</Button>
			<a href='/' className='login-zhuce'>注册</a>

			{/*  */}
			<div className='login-icon clearfix'>
				<i className='qq'></i>
				<i className='weixin'></i>
				<i className='wangyi'></i>
				<i className='xinlang'></i>
			</div>
			<div className='login-xieyi'>
			
			<Checkbox><i>同意</i><span>《用户协议》《隐私协议》《儿童隐私政策》</span></Checkbox>
			</div>
			
		</div>
	</ConfigProvider>

	
}
export default withRouter(Header);