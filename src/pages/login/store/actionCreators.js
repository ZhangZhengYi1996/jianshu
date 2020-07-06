import axios from "axios";
import * as actionTypes from "./actionTypes.js";



const changeLogin=()=>{
    return {
        type:actionTypes.CHANGE_LOGIN,
        value:true
    }
}
export const logOut=()=>{
    return {
        type:actionTypes.LOG_OUT,
        value:false
    }
}
export const login=(account,pwd)=>{
    return (dispatch)=>{
        axios.get("/api/login.json?account="+account+"&password="+pwd).then((res)=>{
              let result=res.data.data;
              if(result){
                  dispatch(changeLogin())
              }else{
                  alert("登录失败")
              }
        })
    }
}