import React from 'react';
import Swiper from 'swiper';
import 'swiper/css/swiper.css';
import './mainPlateBanner.less';

class MainPlateBanner extends React.Component {
    state = {
        data: []
    };
    componentWillMount() {
        setTimeout(() => {
            this.setState({});
        }, 1000);
    }
    render() {
        return <>
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {/* h:78px w:60px*/}
                    <div className="swiper-slide">
                        <img src={require('../assets/images/mainplate/slide1.png')} alt="" />
                        <span>最嗨电音</span>
                    </div>
                    <div className="swiper-slide">
                        <img src={require('../assets/images/mainplate/slide1.png')} alt="" />
                        <span>私人FM</span>
                    </div>
                    <div className="swiper-slide">
                        <img src={require('../assets/images/mainplate/slide1.png')} alt="" />
                        <span>ACG专区</span>
                    </div>
                    <div className="swiper-slide">
                        <img src={require('../assets/images/mainplate/slide1.png')} alt="" />
                        <span>Sati空间</span>
                    </div>
                    <div className="swiper-slide">
                        <img src={require('../assets/images/mainplate/slide1.png')} alt="" />
                        <span>私藏推荐</span>
                    </div>
                    <div className="swiper-slide">
                        <img src={require('../assets/images/mainplate/slide1.png')} alt="" />
                        <span>因乐交友</span>
                    </div>
                    <div className="swiper-slide">
                        <img src={require('../assets/images/mainplate/slide1.png')} alt="" />
                        <span>亲子频道</span>
                    </div>
                    <div className="swiper-slide">
                        <img src={require('../assets/images/mainplate/slide1.png')} alt="" />
                        <span>古典专区</span>
                    </div>
                    <div className="swiper-slide">
                        <img src={require('../assets/images/mainplate/slide1.png')} alt="" />
                        <span>跑步FM</span>
                    </div>
                    <div className="swiper-slide">
                        <img src={require('../assets/images/mainplate/slide1.png')} alt="" />
                        <span>小冰电台</span>
                    </div>
                    <div className="swiper-slide">
                        <img src={require('../assets/images/mainplate/slide1.png')} alt="" />
                        <span>爵士电台</span>
                    </div>
                    <div className="swiper-slide">
                        <img src={require('../assets/images/mainplate/slide1.png')} alt="" />
                        <span>驾驶模式</span>
                    </div>
                    <div className="swiper-slide">
                        <img src={require('../assets/images/mainplate/slide1.png')} alt="" />
                        <span>云村正能量</span>
                    </div>
                    <div className="swiper-slide">
                        <img src={require('../assets/images/mainplate/slide1.png')} alt="" />
                        <span>编辑</span>
                    </div>
                </div>
            </div>
        </>;
    }
    // 第一次加载完成后，基于DOM操作完成SWIPER运动
    componentDidUpdate() {
        if (this.swiperExample) return;
        this.swiperExample = new Swiper('.swiper-container', {
            loop: false,
            width: 60
        });
    }
}

export default MainPlateBanner;
