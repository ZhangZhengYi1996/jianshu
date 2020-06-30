import React, { Component } from 'react';
import "../style.scss";
import { connect } from "react-redux";
class Topics extends Component {
    render() {
        return (
            <div className="topic-wrapper">
                {
                    this.props.list.map((item) => {
                        return (
                            <div className="topic-item" key={item.get("id")}>
                                <img src={item.get("imgUrl")} alt="话题" />
                                {item.get("topic")}
                            </div>
                        )
                    })
                }


                <div className="topic-more">更多热门专题&nbsp;&gt;</div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        list: state.get("home").get("topicList")
    }
}
export default connect(mapStateToProps, null)(Topics);
