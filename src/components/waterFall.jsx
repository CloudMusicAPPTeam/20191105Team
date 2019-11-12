import React, { Component } from 'react';
import axios from 'axios';

class WaterFall extends Component {
	constructor(props) {
		super(props);
		this.ajaxPull = this.ajaxPull.bind(this);
		this.state = {
			leftData: [],
			centerData: [],
			rightData: []
		};
		this.ajax = 1;

	};
	componentWillMount() {
		this.ajaxData();
	}
	componentDidMount() {
		document.addEventListener('scroll', this.ajaxPull)
	}
	componentWillUnmount() {
		document.removeEventListener('scroll', this.ajaxPull);
	}
	ajaxData = () => {
		const { leftData, rightData } = this.state;
		this.ajax = 0;
		axios.get('/waterfall/list').then(result => {
			this.ajax = 1;
			result.data.map(item => {
				const a = this.getMinContain();
				switch (a.className) {
					case 'u1': leftData.push(item); break;
					case 'u2': rightData.push(item); break;
					default: return null;
				}
				this.setState({ leftData, rightData });
			});
		});
	};
	//获取高度最低的一个
	getMinContain = () => {
		const { newPinterest } = this;
		const { childNodes } = newPinterest;
		let minData = childNodes[0];
		childNodes && childNodes.forEach(item => {
			if (item.offsetHeight < minData.offsetHeight) {
				minData = item
			}
		});
		return minData;
	};
	//滚动事件
	ajaxPull() {
		const height = window.innerHeight;
		const scroll = document.body.scrollTop;
		const domHeight = document.body.scrollHeight;
		if (scroll + height > domHeight - 132 && this.ajax) {
			this.ajaxData();
		}
	};
	mapListToHtml = (data) => {
		const arr = ['fadeIn', 'rotateIn', 'zoomIn'];
		const animate = parseInt(Math.random() * 3);
		return data.map((item, index) => <li
			key={index}>
			<img style={{ WebkitAnimation: `${arr[animate]} 0.8s ease-in-out 1 0s alternate forwards` }} src={item.pic} alt={item.name} style={ {width:parseInt(item.width) / 300+'rem' ,height:parseInt(item.height) / 300+'rem'}}/>
		</li>);
	};
	render() {
		const { leftData, centerData, rightData } = this.state;
		return (<div  ref={ref => this.newPinterest = ref} className="newPinterest clearfix">
			<ul ref={ref => this.leftCol = ref} className="u1">
				{!!leftData && this.mapListToHtml(leftData)}
			</ul>
			<ul ref={ref => this.rightCol = ref} className="u2" >
				{!!rightData && this.mapListToHtml(rightData)}
			</ul>
		</div>)
	}
}
export default WaterFall;