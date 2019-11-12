import React from 'react';
import { withRouter,NavLink } from 'react-router-dom';
import './FindMain.less';

function FindMain(props) {
    return <div className="home_main">
        <div className="main_remd">
            <div className="remd_title">
                <NavLink to='/xiangxi'>
                    <h2 className="title_text1">推荐歌单</h2>
                </NavLink>

                <a href="" className="title_text2">歌单广场</a>
            </div>
            <div className="remd_ul">
                <a href="" className="remd_li">
                    <div className="remd_img">
                        <img src="http://p2.music.126.net/Rh8JO50ZbU8NVYK9h-G8YQ==/109951164221820704.webp?imageView&thumbnail=369x0&quality=75&tostatic=0&type=webp" alt="" />
                    </div>
                    <p className="remd_text">法语爵士|红酒与玫瑰浪漫邂逅</p>
                </a>
                <a href="" className="remd_li">
                    <div className="remd_img">
                        <img src="http://p2.music.126.net/-G31v_fyy50ZMpyDEZ0j5w==/109951164265917857.webp?imageView&thumbnail=369x0&quality=75&tostatic=0&type=webp" alt="" />
                    </div>
                    <p className="remd_text">法语爵士|红酒与玫瑰浪漫邂逅</p>
                </a>
                <a href="" className="remd_li">
                    <div className="remd_img">
                        <img src="http://p2.music.126.net/16YjofanqyKk3GTQz4LhQw==/109951163463413693.webp?imageView&thumbnail=369x0&quality=75&tostatic=0&type=webp" alt="" />
                    </div>
                    <p className="remd_text">法语爵士|红酒与玫瑰浪漫邂逅</p>
                </a>
                <a href="" className="remd_li">
                    <div className="remd_img">
                        <img src="http://p2.music.126.net/fh53OCctfoxe27D4jpXyUQ==/109951164382703670.webp?imageView&thumbnail=369x0&quality=75&tostatic=0&type=webp" alt="" />
                    </div>
                    <p className="remd_text">法语爵士|红酒与玫瑰浪漫邂逅</p>
                </a>
                <a href="" className="remd_li">
                    <div className="remd_img">
                        <img src="http://p2.music.126.net/tu4ON-DsY1SAJIL-JInuqw==/109951164456255025.webp?imageView&thumbnail=369x0&quality=75&tostatic=0&type=webp" alt="" />
                    </div>
                    <p className="remd_text">法语爵士|红酒与玫瑰浪漫邂逅</p>
                </a>
                <a href="" className="remd_li">
                    <div className="remd_img">
                        <img src="http://p2.music.126.net/tu4ON-DsY1SAJIL-JInuqw==/109951164456255025.webp?imageView&thumbnail=369x0&quality=75&tostatic=0&type=webp" alt="" />
                    </div>
                    <p className="remd_text">法语爵士|红酒与玫瑰浪漫邂逅</p>
                </a>
            </div>
        </div>
        <div className="new_song">
            <div className="song_title">
                <h2 className="song_title_text1">新碟</h2>
                <a href="" className="song_title_text2">更多新碟</a>
            </div>
            <div className="song_ul">
                <a href="" className="song_li">
                    <div className="song_img">
                        <img src={require('../../assets/images/Find/new_song1.jpg')} alt="" />
                    </div>
                    <p className="song_text">王嘉尔首张专辑</p>
                </a>
                <a href="" className="song_li">
                    <div className="song_img">
                        <img src={require('../../assets/images/Find/new_song2.jpg')} alt="" />
                    </div>
                    <p className="song_text">王嘉尔首张专辑</p>
                </a>
                <a href="" className="song_li">
                    <div className="song_img">
                        <img src={require('../../assets/images/Find/new_song3.jpg')} alt="" />
                    </div>
                    <p className="song_text">王嘉尔首张专辑</p>
                </a>
            </div>
        </div>
    </div>
}
export default withRouter(FindMain);