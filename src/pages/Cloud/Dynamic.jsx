import React, { Component } from 'react';
import './Dynamic.less';
import axios from '../../api/axios';


class Dynamic extends Component {
	state = {
		data: []
	};
	componentWillMount() {
		axios.post('/dynamic/list').then(result => {
			this.setState({
				data:result,
			});
		});
	}
	render() {
		let { data } = this.state;
		return <>
			{data.map(item => {
				return <div className="content-box" key={item.id}>
					<div className="content-left">
						<div className="head-img">
							<img src={item.pic} alt="" />
						</div>
					</div>
					<div className="content-right">
						<div className="main-content">
							<p className="content-text">{item.desc}</p>
							<div className="content-img">
								<img src={item.url} alt="" />
							</div>
						</div>
					</div>
				</div>
			})}
		</>
	}
}

export default Dynamic;