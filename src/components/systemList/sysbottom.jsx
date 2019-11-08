import React from 'react';
import './sysbottom.less';
import '../../assets/images/sysBottom/iconfont.css'

class SysBottom extends React.Component {
    render() {
        return <div className='sysBottom'>
            <div className='sysbottomNav'>
                <ul className='sysbottomUl'>
                    <li><i className='iconfont icon-yejian'></i>夜间模式</li>
                    <li className='shezhi'><i className='iconfont icon-shezhi'></i>设置</li>
                    <li className='tuichu'><i className='iconfont icon-tuichu'></i>退出</li>
                </ul>
            </div>
        </div>
    }
}
export default SysBottom;

