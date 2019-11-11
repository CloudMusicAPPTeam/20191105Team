import axios from './axios';

function login (account,Password){
    return axios.post('/user/login',{
        account,
        Password,
    })
}
export default {
    login
}

