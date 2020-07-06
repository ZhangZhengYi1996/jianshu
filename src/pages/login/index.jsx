import React, { PureComponent } from 'react';
import "./style.scss";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {actionCreators} from "./store";

class Login extends PureComponent {
    render() {
        if(!this.props.loginState){
            return (
                <div className="login-wrapper">
                     <div className="login-box">
                         <input className="login-input" placeholder="账号" ref={(input)=>{this.account=input}}></input>
                         <input className="login-input" placeholder="密码" type="password" ref={(input)=>{this.password=input}}></input>
                         <div className="login-button" onClick={()=>{this.props.login(this.account,this.password)}}>登录</div>
                     </div>
                </div>
            );
        }else {
            //window.location.href="/"
            return <Redirect  to="/"/>
        }
        
    }
}

const mapState =(state)=>{
return {
    loginState:state.getIn(["login","login"])
}
}

const mapDispatch =(dispatch)=>{
    return {
        login(account,password){
             dispatch(actionCreators.login(account.value,password.value));
        }
    }
}



export default connect(mapState,mapDispatch)(Login);