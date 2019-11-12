import React from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

class LocalMusic extends React.Component {
    render() {
        return <>
            <Tabs defaultActiveKey="1">
                <TabPane tab="单曲" key="1">
                    单曲页面
                </TabPane>
                <TabPane tab="歌手" key="2">
                    歌手页面
                </TabPane>
                <TabPane tab="专辑" key="3">
                    专辑页面
                </TabPane>
                <TabPane tab="详情" key="4">
                    <div className='detail'>
                        <img src="" alt="" />
                        <div>
                            <p></p>
                        </div>
                    </div>
                </TabPane>
            </Tabs>
        </>;
    }
}

export default LocalMusic;