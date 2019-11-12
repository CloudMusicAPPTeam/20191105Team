import React from 'react';
import './xiangqingList.less';
import axios from '../../../api/axios';




class List extends React.Component {
    state = {
        data: [],
    };
    componentWillMount() {
        axios.post('/sing/list').then(result => {
            this.setState({
                data: result,
            });
        });
    }
    render() {
        return <div className='listBox'>
            <p className='singTitleList'>歌曲列表</p>
            <ul className='listNav'>
                {this.state.data.map(item => {
                    return <li className='singListLi' key={item.id}>
                        <div className='singId'>
                        {item.id}
                        </div>
                        <div className='singTitle'>
                            <p className='singTitleP1'>{item.Title}</p>
                            <p className='singTitleP2'>{item.singer}</p>
                        </div>
                        <div className='singIcon'>
                            <span></span>
                        </div>

                    </li>




                })}

            </ul>
        </div>



    }
}
export default List;