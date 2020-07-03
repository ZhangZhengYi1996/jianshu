import React, { PureComponent } from 'react'
import Topics from "./components/Topics";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Download from "./components/Download";
import Writer from "./components/Writer";
import {connect} from "react-redux";
import {actionCreators} from "./store";
import "./style.scss";

class Home extends PureComponent {
    render() {
        return (
            <div>
                <div className="home-wrapper">
                    <div className="home-left">
                        <img src="https://upload.jianshu.io/admin_banners/web_images/4986/33b9e72aff1e083dfb5aa7a1c8a427e53fdc1e9e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="banner" className="banner-img" />
                        <Topics></Topics>
                        <List></List>
                    </div>
                    <div className="home-right">
                        <Recommend></Recommend>
                        <Download></Download>
                        <Writer></Writer>
                    </div>
                    {this.props.showScroll?<div className="backtop" onClick={this.onBackTop}>返回顶部</div>:null}
                </div>
            </div>

        ) 
    }
    onBackTop(){
        //console.log(this);
        window.scrollTo(0,0);
    }
    bindEvents(){
        //console.log(this)
        window.addEventListener("scroll",this.props.changeScrollShow)
    }
    componentDidMount() {
        this.props.changeHomeList();
        this.bindEvents();
    }
    componentWillUnmount() {
        window.removeEventListener("scroll",this.props.changeScrollShow)
    }
}
const mapState =(state)=>{
    return {
         showScroll:state.getIn(["home","showScroll"])
    }
}
const mapDispatch=(dispatch)=>{
    return {
         changeHomeList(){
            const action = actionCreators.getHomeList();
            dispatch(action);
         },
         changeScrollShow(){
             if(document.documentElement.scrollTop>200){
                dispatch(actionCreators.changeScrollShow(true));
             }else{
                dispatch(actionCreators.changeScrollShow(false));
             }
         }
    }
};

export default connect(mapState,mapDispatch)(Home);
