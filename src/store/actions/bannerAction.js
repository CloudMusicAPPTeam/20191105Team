import * as TYPES from '../action-types';
import api from '../../api/index';


const bannerAction = {
    querybannerList() {
        return async dispatch => {
            let data = await api.bannerList.bannerList(0);
            if (parseInt(data.code) === 0) {
                dispatch({
                    type: TYPES.GET_BANNER_LIST,
                    payload: data.list
                });
            }
        }
    }
}
export default bannerAction;