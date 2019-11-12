import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './FindNav.less';

function FindNav(props) {
    return <div className="home-nav">
        <Link href="" className="nav-li nav1">
            <div className="nav-icon">
                <img src={require('../../assets/images/Find/nav_icon.png')} alt="" />
            </div>
            <p className="nav-text text1">每日推荐</p>
        </Link>
        <Link href="" className="nav-li nav2">
            <div className="nav-icon">
                <img src={require('../../assets/images/Find/nav_icon.png')} alt="" />
            </div>
            <p className="nav-text text2">歌单</p>
        </Link>
        <Link href="" className="nav-li nav3">
            <div className="nav-icon">
                <img src={require('../../assets/images/Find/nav_icon.png')} alt="" />
            </div>
            <p className="nav-text text3">排行榜</p>
        </Link>
        <Link href="" className="nav-li nav4">
            <div className="nav-icon">
                <img src={require('../../assets/images/Find/nav_icon.png')} alt="" />
            </div>
            <p className="nav-text text4">电台</p>
        </Link>
        <Link href="" className="nav-li nav5">
            <div className="nav-icon">
                <img src={require('../../assets/images/Find/nav_icon.png')} alt="" />
            </div>
            <p className="nav-text text5">直播</p>
        </Link>
    </div>;
}
export default withRouter(FindNav);