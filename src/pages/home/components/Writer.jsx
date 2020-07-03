import React, { PureComponent } from 'react';
import { connect } from "react-redux";
class Writer extends PureComponent {
    render() {
        return (
            <div className="writer-wrapper">
                <div className="writer-header">
                    <p className="writer-header-recommend">推荐作者</p>
                    <p className="writer-header-change">
                        <i className="iconfont">&#xe7e9;</i>
                        换一批
                    </p>
                </div>
                {
                    this.props.list.map((item) => {
                        return (
                            <div className="writer-item" key={item.get("id")}>
                                <img src={item.get("url")} alt="writer" className="writer-item-img" />
                                <div className="writer-item-info">
                                    <span className="writer-item-info-name">{item.get("name")}</span>
                                    <span className="writer-item-info-plus">+关注</span>
                                    <div className="writer-item-info-desc">{item.get("words")}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
const mapState = (state) => {
    return {
        list: state.getIn(["home", "writerList"])
    }
}
export default connect(mapState, null)(Writer);
