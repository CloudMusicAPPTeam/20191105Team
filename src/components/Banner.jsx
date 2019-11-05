import React from 'react';
import { connect } from 'react-redux';
import Swiper from 'swiper';
import 'swiper/css/swiper.css';
import './Banner.less';

class Banner extends React.Component {
	state = {
		data: []
	};
	componentWillMount() {
		setTimeout(() => {
			this.setState({
				data: [{
					id: 1,
					pic: 'https://shop.io.mi-img.com/app/shop/img?id=shop_7f79014b3984f9a2ca0ccd989fee960a.jpeg&w=1080&h=450&crop=a_0_0_1080_480&t=webp',
					title: ''
				}, {
					id: 2,
					pic: 'https://shop.io.mi-img.com/app/shop/img?id=shop_800b78d4c2287c6c7a3681076f9b1606.jpeg&w=1080&h=450&crop=a_0_0_1080_480&t=webp',
					title: ''
				}, {
					id: 3,
					pic: 'https://shop.io.mi-img.com/app/shop/img?id=shop_7f79014b3984f9a2ca0ccd989fee960a.jpeg&w=1080&h=450&crop=a_0_0_1080_480&t=webp',
					title: ''
				}]
			});
		}, 1000);
	}
	render() {
		let { data } = this.state;
		return <>
			{data.length > 0 ? <div className='swiper-container'>
				<div className='swiper-wrapper'>
					{data.map(item => {
						return <div className="swiper-slide" key={item.id}>
							<img src={item.pic} alt='' />
						</div>;
					})}
				</div>
				<div className="swiper-pagination"></div>
			</div> : null}
		</>;
	}
	// 第一次加载完成后，基于DOM操作完成SWIPER运动
	componentDidUpdate() {
		if (this.swiperExample) return;
		this.swiperExample = new Swiper('.swiper-container', {
			loop: true,
			pagination: {
				el: '.swiper-pagination',
			},
			autoplay: {
				delay: 1000,
				disableOnInteraction: false
			}
		});
	}
}

export default Banner;