import axios from './axios';

function login(account, password) {
    return axios.post('/user/login', {
        account,
        password,
    }).then(result => {
        if (parseInt(result.code) === 0) {
            return result.codeText;
        }
        return Promise.reject(result.codeText);
    });
}
export default {
    login
}