import React from 'react';
import Swiper from 'swiper';
import 'swiper/css/swiper.css';
import './Banner.less';
import axios from '../api/axios';


class Banner extends React.Component {
	state = {
		data: [],
	};

	componentWillMount() {
		
		axios.post('/banner/list').then(result => {

			console.log(result)
			this.setState({
				data:result,
				
			});
		});

		
	}
	render() {
		let { data } = this.state
		
		return <>
			<div className='swiper-container'>
				<div className='swiper-wrapper'>
					{this.state.data.map(item => {
						return <div className="swiper-slide" key={item.id}>
							<img src={item.url} alt='' />
						</div>;
					})}
				</div>
				<div className="swiper-pagination"></div>
			</div>
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
/* export default connect(state=>state.Banner,actions.Banner)(Banner); */
export default Banner;