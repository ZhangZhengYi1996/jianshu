import {
    fromJS
} from "immutable";
import * as actionTypes from "./actionTypes.js";
const defaultStatus = fromJS({
    topicList: [],
    articleList:[],
    recommendList: [],
    writerList:[],
    articlePage:1,
    showScroll:false
});

export default (state = defaultStatus, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_HOME_LIST :
            return state.merge({
                topicList:fromJS(action.data.topicList),
                articleList:fromJS(action.data.articleList),
                recommendList:fromJS(action.data.recommendList),
                writerList:fromJS(action.data.writerList),

            });
        case actionTypes.ADD_MORE_LIST:
            return state.merge({
                articleList:state.get("articleList").concat(action.list),
                articlePage:action.page
            });
        case actionTypes.CHANGE_SCROLL_SHOW:
            return state.set("showScroll",action.show)
        default:
            return state;
    }
}