import React from 'react';
import './systemListTitle.less';
import '../../assets/images/sys/iconfont.css'

class SysList extends React.Component {
    render() {
        return <div className='sysListTitle'>
            <div className='xinxi icon'>
                <i className='iconfont icon-xinxi'></i>
                <span>我的信息</span>
            </div>        
            <div className='tingge icon'>
                <i className='iconfont icon-tinggeshiqu'></i>
                <span>听歌识曲</span>
            </div>  
            <div className='iconUser icon'>
                <i className='iconfont icon-icon-user'></i>
                <span>我的好友</span>
            </div>  
            <div className='gexing icon'>
                <i className='iconfont icon-gexing'></i>
                <span>个性扮装</span>
            </div>  
            
            </div>
    }
}
export default SysList;

