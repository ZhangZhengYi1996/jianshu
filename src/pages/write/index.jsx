import React, { PureComponent } from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";


class Write extends PureComponent {
    render() {
        if(this.props.loginState){
            return (
                <div >
                    写文章页面
                </div>
            );
        }else {
            //window.location.href="/"
            return <Redirect  to="/login"/>
        }
        
    }
}

const mapState =(state)=>{
return {
    loginState:state.getIn(["login","login"])
}
}





export default connect(mapState,null)(Write);