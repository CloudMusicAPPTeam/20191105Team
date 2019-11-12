import React from 'react'
import './xiangqingTitle.less'

class title extends React.Component {
    render() {
        return <div className='xiangqingTitle'>
            <div className='xiangqingTop'>
                <span className='biaoqianaBox'>标签：
                    <span className='biaoqian'>轻音乐</span>
                    <span className='biaoqian'>夜晚</span>
                </span>
            </div>
            <div className='xiangqingBottom'>
                <span>简介：此歌单为纯音乐 解压 看书 刷题 睡觉 御用 愿这些音乐能带给在陌生城市的你一些温暖❤</span>
            </div>
        </div>
    }
}
export default title;