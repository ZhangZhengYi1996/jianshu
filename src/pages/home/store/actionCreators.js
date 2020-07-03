import axios from "axios";
import * as actionTypes from "./actionTypes.js";
import {
    fromJS
} from "immutable";
const homeData = (result) => {
    return {
        type: actionTypes.CHANGE_HOME_LIST,
        data: result
    }
}
const moreList = (result,page) => {
    return {
        type: actionTypes.ADD_MORE_LIST,
        list: fromJS(result),
        page:fromJS(page)
    }
}
export const changeScrollShow=(show)=>{
    return {
        type:actionTypes.CHANGE_SCROLL_SHOW,
        show
        
    }
}
export const getHomeList = () => {
    return (dispatch) => {
        axios.get("./api/home.json").then((res) => {
            let result = res.data.data;
            let action = homeData(result);
            dispatch(action);
        })
    }
}
export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get("./api/homeList.json?page="+page).then((res) => {
            let result = res.data.data;
            dispatch(moreList(result,page+1));
        })
    }
}