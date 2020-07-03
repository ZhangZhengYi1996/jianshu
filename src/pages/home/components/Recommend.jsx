import React, { PureComponent } from 'react'
import {connect} from "react-redux";
 class Recommend extends PureComponent {
    render() {
        return (
            <div className="recommend-wrapper">
                {
                    this.props.list.map((list)=>{
                        return (
                        <img src={list.get("url")} alt="recommend" 
                        className="recommend-item"
                        key={list.get("id")}
                        />
                        )
                    })
                }

            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        list:state.getIn(["home","recommendList"])
    }
}
export default connect(mapStateToProps, null)(Recommend)
