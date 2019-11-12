import {
	combineReducers
} from 'redux';
import bannerList from './bannerReducer'
const reducer = combineReducers({
	bannerList:bannerList
});
export default reducer;
