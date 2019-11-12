import axios from './axios';

function bannerList (){
    return axios.post('/banner/list')
}
export default {
    bannerList
}

