import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import Find from '../Find/Find';
import 'antd/dist/antd.css';
import './Login.less';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider, Input, Button, Checkbox, message } from 'antd';
import axios from '../../api/axios';

class Header extends React.Component {
	state = { data: [] };
	componentWillMount() {
		axios.post('/user/login').then(result => {
			this.setState({
				data: result.data,
			});
		});
	}

	handleLoginBtn = () => {
		let account = this.refs.account.state.value,
			password = this.refs.password.state.value
		if (account === this.state.data[0].phone && password === this.state.data[0].password) {
			this.props.history.push({ pathname: "/"});
		}
		message.info("账号和密码不匹配，请核对后再试！")
	}
	render() {
		return <ConfigProvider locale={zhCN}>
			<div className='loginBox' >
				<div className='login-neirong'>
					<div className="main-header">
					</div>
					<div className='login-input'>
						<Input type='text' placeholder="输入账号"
							ref="account"
							className='account'
						/>
						<br />
						<Input type='password' placeholder="输入密码"
							ref="password"
							className='password'
						/>
					</div>
					<Button className='loginBtn' onClick={
						this.handleLoginBtn
					}>登录</Button>
					<a href='/' className='login-zhuce'>立即注册</a>

					<div className='login-icon'>
						<i className='qq'></i>
						<i className='weixin'></i>
						<i className='wangyi'></i>
						<i className='xinlang'></i>
					</div>
					<div className='login-xieyi'>
						<Checkbox><i>同意</i><span>《用户协议》《隐私协议》《儿童隐私政策》</span></Checkbox>
					</div>
				</div>
			</div>
			<Switch>
				<Route path='/' exact component={Find} />
			</Switch>
		</ConfigProvider>
	}
}
export default withRouter(Header);