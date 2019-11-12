import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './FindNav.less';
import '../../assets/images/Find/find-icon/iconfont.css'


function FindNav(props) {
    return <div className="home-nav">
        <Link className="nav-li nav1">
            <div className='findIconBox'>
                <i className='iconfont icon-rili'></i>
            </div>
            <p className="nav-text text1">每日推荐</p>
        </Link>

        <Link className="nav-li nav2">
            <div className='findIconBox'>
                <i className='iconfont  icon-gedan'></i>
            </div>
            <p className="nav-text text2">歌单</p>
        </Link>
        <Link className="nav-li nav3">
            <div className='findIconBox'>
                <i className='iconfont  icon-paihangbangxuanzhong'></i>
            </div>
            <p className="nav-text text3">排行榜</p>
        </Link>
        <Link className="nav-li nav4">
            <div className='findIconBox'>
                <i className='iconfont  icon-diantai'></i>
            </div>

            <p className="nav-text text4">电台</p>
        </Link>
        <Link className="nav-li nav5">
            <div className='findIconBox'>
                <i className='iconfont  icon-zhibo'></i>
            </div>

            <p className="nav-text text5">直播</p>
        </Link>
    </div>;
}
export default withRouter(FindNav);