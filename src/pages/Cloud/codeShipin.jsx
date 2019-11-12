import React from 'react';
import './codeShipin.less';
import axios from '../../api/axios';
import 'antd/dist/antd.css';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider, Row, Col, Slider } from 'antd'


class shipin extends React.Component {
    state = {
        data: [],
    };
    componentWillMount() {
        axios.post('/shipin/list').then(result => {
            
            this.setState({
                data: result,

            });
        });
        
    }
    render() {
        let { data } = this.state
        return <ConfigProvider locale={zhCN}>
            <Row>
                {data.map(item => {
                    return <Col className='shipinList' xs={{ span: 4, offset: 1 }} lg={{ span: 4, offset: 1 }}>
                        <div className='shipinImgBox'>
                            <img src={item.url} alt="" />
                        </div>

                        <p>{item.text}</p>
                    </Col>


                })}






            </Row>




        </ConfigProvider>
    }
}






/* {this.state.data.map(item => {
    return <div className='shipinList' key={item.id}>
        <div className='shipinImgBox'>
            <img src={item.url} alt="" />
            <span className='shipinText'>{item.text}</span>
        </div>

    </div>
})} */
export default shipin;