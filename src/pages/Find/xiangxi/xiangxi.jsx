import React from 'react';
import './xiangxi.less';
import Head from './xiangqingHead';
import Title from './xiangqingTitle';
import List from './xiangqingList';
class XiangXi extends React.Component {




    render() {
        return <div className='title'>
            <Head></Head>
            <Title></Title>
            <List></List>

        </div>
    }
}
export default XiangXi
