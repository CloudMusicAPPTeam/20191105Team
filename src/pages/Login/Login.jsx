import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import './Login.less';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider, Input, Button, Checkbox, Result } from 'antd';
import api from '../../api/index';


class Header extends React.Component {
	/* constructor(props) {
		super(props);
		this.state = {
			value: ''
		}

	} */
	/* change(e) {
		console.log(e.target.value);   //获取修改后的值
		this.setState({
			value: e.target.value
		})
	} */

	handleLoginBtn = () => {
		// (this.refs.account.state.value);
		/* console.log(this.state); */
		console.log(this.refs.account.value);
		// console.log(this.refs.password);

		// console.log(this.refs.password.value);
	}
	render() {
		return <ConfigProvider locale={zhCN}>

			<div className='loginBox' >
				<div className='login-neirong'>
					<div className="main-header">
					</div>
					<div className='login-input'>
						<Input placeholder="输入账号"
							ref="account"
							className='account'
						/>
						<br />
						<Input.Password placeholder="输入密码" visibilityToggle='false'
						className='password'
						ref='password' />
					</div>
					<Button className='loginBtn' onClick={
						this.handleLoginBtn
						/* api.login.login('123456789','123456789').then(result=>{
							console.log(result);
							
						}); */
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
		</ConfigProvider>

	}


}
export default withRouter(Header);