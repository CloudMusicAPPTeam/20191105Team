import React from 'react';
import './system.less';
import 'antd/dist/antd.css';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider, Drawer, Button } from 'antd';
import SysList from './systemList/systemListTitle';
import SystemMain from './systemList/systemMain';
import SystemBottom from './systemList/sysbottom';

import {  NavLink } from 'react-router-dom';

class System extends React.Component {
    state = { visible: false };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        return <ConfigProvider locale={zhCN}>
            <div className='sysBox'>
                <div style={{ marginTop: 16 }}>
                    <Button className='sysBtn' type="primary" onClick={this.showDrawer}>

                    </Button>
                </div>
                <Drawer
                    width='325'
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    getContainer={false}
                    
                >
                    <div className='sysMainBox'>
                        <div className='sysMainHead'>
                            <div className='sysMainPhoto'>
                                <img src={require('../assets/images/photo.png')} alt="" />
                            </div>
                            <div className='sysMainText'>
                                <NavLink to='/login'>伊利丹·怒风</NavLink>
                                
                                <span className='sysLive'>Lv.5</span>
                                <span className='sysMainqiandao'><i></i><span>签到</span></span>
                            </div>
                        </div>
                    </div>
                    <SysList></SysList>
                    <SystemMain></SystemMain>
                    <SystemBottom></SystemBottom>

                </Drawer>

               
            </div>
        </ConfigProvider>
    }
}
export default System;

