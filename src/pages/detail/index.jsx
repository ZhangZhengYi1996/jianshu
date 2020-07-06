import React, { PureComponent } from 'react'
import "./style.scss";
import {connect} from "react-redux";
import {actionCreators} from './store';
import {withRouter} from "react-router-dom";
class Detail extends PureComponent {
    render() {
        return (
            <div className="detail-wrapper">
                <div className="detail-header">{this.props.title}</div>
                <div className="detail-content" dangerouslySetInnerHTML={{__html:this.props.content}}>
                   
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
    }
    
}

const mapState=(state)=>{
    return {
        title:state.getIn(["detail","title"]),
        content:state.getIn(["detail","content"])
    }
}

const mapDispatch=(dispatch)=>{
    return {
        getDetail(id){
            dispatch(actionCreators.getDetail(id))
        }
    }
}

export default connect(mapState,mapDispatch)(withRouter(Detail));
