import React, { Component } from 'react';
import { connect } from "react-redux";
import {
    HeaderWrapper, Logo, Nav, NavItem,
    NavSearch, Addition, Button,
    SearchWrapper, SearchInfo, SearchInfoTitle,
    SearchInfoSwitch, SearchInfoItem
} from "./style";
import { CSSTransition } from "react-transition-group";
import {actionCreators as loginActionCreators } from "../../pages/login/store";
//import * as actionCreators  from "./store/actionCreators";
import { actionCreators } from "./store";
import { Link } from "react-router-dom";


class Header extends Component {
    getInfoList() {
        const { focused, list, page, onMouseIn, onMouseLeave, mouseIn, onChangePage, totalPage } = this.props;
        const pageList = [];
        const newList = list.toJS();
        if (newList.length) {
            for (let i = (page - 1) * 5; i < page * 5; i++) {
                pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>)
            }
        }
        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={onMouseIn}
                    onMouseLeave={onMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => { onChangePage(page, totalPage, this.spinIcon) }}>
                            <i className="iconfont spin" ref={(icon) => { this.spinIcon = icon }}>&#xe7e9;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <div>
                        {pageList}
                    </div>
                </SearchInfo>
            )
        } else {
            return null;
        }
    }
    render() {
        const { focused, onInputFocus, onInputBlur, list ,login,logOut} = this.props;
        return (
            <HeaderWrapper>
                <Link to="/">
                    <Logo />
                </Link>

                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载app</NavItem>
                    {
                        login? <NavItem className="right" onClick={logOut}>退出</NavItem>:
                        <Link to="/login"><NavItem className="right">登录</NavItem></Link>
                    }
                    
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={400}
                            classNames="slide"
                        >
                            <NavSearch placeholder="搜索"
                                className={focused ? "focused" : ""}
                                onFocus={() => { onInputFocus(list) }}
                                onBlur={onInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        {this.getInfoList()}
                        <i className={focused ? "focused iconfont zoom" : "iconfont zoom"}>&#xe60d;</i>
                    </SearchWrapper>

                    <Addition>
                        <Link to="/write">
                        <Button className="write">
                            <i className="iconfont">&#xe708;</i>
                        写文章
                        </Button>
                        </Link>
                        <Button className="reg">注册</Button>
                    </Addition>
                </Nav>
            </HeaderWrapper>
        );
    }
}



const mapStateToProps = (state) => {
    return {
        focused: state.get("header").get("focused"),
        list: state.get("header").get("list"),
        page: state.get("header").get("page"),
        totalPage: state.get("header").get("totalPage"),
        mouseIn: state.get("header").get("mouseIn"),
        login:state.getIn(["login","login"])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInputFocus(list) {
            list.size === 0 && dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        onInputBlur() {
            dispatch(actionCreators.searchBlur())
        },
        onMouseIn() {
            dispatch(actionCreators.mouseIn())
        },
        onMouseLeave() {
            dispatch(actionCreators.mouseLeave())
        },
        onChangePage(page, totalPage, spin) {
            let origin = spin.style.transform.replace(/\D/g, "");
            if (origin) {
                origin = 360 + +origin;
            } else {
                origin = 360;
            }
            spin.style.transform = `rotate(${origin}deg)`;
            if (page < totalPage) {
                dispatch(actionCreators.changePage(page + 1))
            } else {
                dispatch(actionCreators.changePage(1))
            }

        },
        logOut(){
            dispatch(loginActionCreators.logOut())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);