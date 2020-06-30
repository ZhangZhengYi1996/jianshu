import React, { Component } from 'react'
import Topics from "./components/Topics";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Download from "./components/Download";
import Writer from "./components/Writer";
import "./style.scss";

class Home extends Component {
    render() {
        return (
            <div className="home-wrapper">
                    <div className="home-left">
                        <img src="https://upload.jianshu.io/admin_banners/web_images/4986/33b9e72aff1e083dfb5aa7a1c8a427e53fdc1e9e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="banner" className="banner-img"/>
                        <Topics></Topics>
                        <List></List>
                    </div>
                    <div className="home-right">
                        <Recommend></Recommend>
                        <Download></Download>
                        <Writer></Writer>
                    </div>
            </div>
        )
    }
}

export default Home;
