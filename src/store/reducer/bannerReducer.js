import {
    GET_BANNER_LIST
} from "../action-types";

const initState={
    bannerList:null
};
export default function bannerList(state=initState,action){
    state=JSON.parse(JSON.stringify(state));
    switch(action.type){
        case GET_BANNER_LIST:
            state.bannerList=action.payload;
            break;
    }
    return state
}

