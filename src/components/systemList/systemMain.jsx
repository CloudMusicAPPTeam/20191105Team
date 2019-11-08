import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import '../../assets/images/sysMain/iconfont.css';
import './systemMain.less';

class SysMain extends React.Component {
    render() {
        return <div className='sysMain'>
            <ul className='sysUl'>
                <li> <i className='iconfont icon-piao'></i>演出</li>
                <li><i className='iconfont icon-shangcheng'></i>商城</li>
                <li><i className='iconfont icon-fujinderen'></i>附近的人</li>
                <li><i className='iconfont icon-94'></i>游戏推荐</li>
                <li><i className='iconfont icon-cailingdingzhi'></i>口袋彩铃</li>
                <li><i className='iconfont icon-chuangzuohe'></i>创作者中心</li>
                <li><i className='iconfont icon-order'></i>我的订单</li>
                <li><i className='iconfont icon-dingshi'></i>定时停止播放</li>
                <li><i className='iconfont icon-saoma'></i>扫一扫</li>
                <li><i className='iconfont icon-naozhong'></i>音乐闹钟</li>
                <li><i className='iconfont icon-ziyuan'></i>音乐云盘</li>
                <li><i className='iconfont icon-zaixiantinggemianliuliang'></i>在线听歌免流量</li>
                <li><i className='iconfont icon-youhuiquan'></i>优惠券</li>
                <li><i className='iconfont icon-baohu'></i>青少年模式</li>
            </ul>
        </div>
    }
}

export default SysMain
