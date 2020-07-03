import React, { PureComponent } from 'react'
import "../style.scss";
import { connect } from "react-redux";
import {actionCreators} from "../store";
import {Link} from "react-router-dom";
class List extends PureComponent {
    render() {
        return (
            <div>
                {this.props.articleList.map((list,index) => {
                    return (
                        <Link to="/detail" key={index}>
                        <div className="list-item" >
                            <img className="list-img" src={list.get("imgUrl")} alt="img" />
                            <div className="list-info">
                                <h3 className="list-info-title">{list.get("topic")}</h3>
                                <p className="list-info-desc">{list.get("desc")}</p>
                                <div className="list-info-more">
                                    <p className="list-info-more-diamond">
                                        <i className="iconfont">&#xe63c;</i>
                                        7.3
                                     </p>
                                    <p className="list-info-more-author">
                                        zhang san
                                    </p>
                                    <p className="list-info-more-comment">
                                        <i className="iconfont">&#xe6d3;</i>
                                        111
                                    </p>
                                    <p className="list-info-more-star">
                                        <i className="iconfont">&#xe60a;</i>
                                        1024
                                    </p>
                                </div>
                            </div>
                        </div>
                        </Link>
                    )
                })}
                <div className="list-loadmore" onClick={()=>{this.props.getMoreList(this.props.page)}}>更多内容</div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        articleList: state.get("home").get("articleList"),
        //state.getIn(["home","articleList"])
        page:state.getIn(["home","articlePage"])
    }
}

const mapDispatch=(dispatch) => {
    return {
        getMoreList(page){
            dispatch(actionCreators.getMoreList(page));
        }
    }
}
export default connect(mapStateToProps, mapDispatch)(List);
