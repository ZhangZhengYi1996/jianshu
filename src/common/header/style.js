import styled from 'styled-components';
import logoPic from "../../statics/logo.png";

export const HeaderWrapper = styled.div `
      height:56px;
      border-bottom:1px solid #f0f0f0;
      position: relative;
      z-index:1;
`

export const Logo = styled.div `
        height:56px;
        position: absolute;
        display: block;
        top:0;
        left:0;
        width:100px;
        background:url(${logoPic});
        background-size:cover;
`

export const Nav= styled.div`
width:960px;
height:100%;
margin:0 auto;
padding-right:70px;
box-sizing:border-box;
`

export const NavItem= styled.div`
    &.left{
        float:left;
    }
    &.right{
        float:right;
        color:#969696;
    }
    &.active{
        color:#ea6f5a;
    }
    line-height:56px;
    padding:0 15px;
    font-size:17px;
    color:#333;
`
export const SearchWrapper=styled.div`
float:left;
position:relative;
.zoom{
    position:absolute;
    right:5px;
    bottom:5px;
    width:30px;
    line-height:30px;
    text-align:center;
    border-radius:15px;
    color:#999;
    &.focused{
        color:#fff;
        background:#777;

    }
}

`;

export const NavSearch=styled.input`
width:160px;
margin-top:9px;
margin-left:20px;
padding:0 30px 0 20px;
box-sizing:border-box;
height:38px;
border:none;
outline:none;
border-radius:19px;
background:#eee;
font-size:14px;
color:#666;
&::placeholder{
    color:#999;
}
&.focused{
    width:240px;
}
&.slide-enter{
    transition: all .4s ease-out;
}
&.slide-enter-active{
    width:240px;
}
&.slide-exit{
    transition: all .4s ease-out;
}
&.slide-exit-active{
    width:160px;
}
`

export const SearchInfo= styled.div`
position : absolute;
    left:0;
    top:56px;
    width:240px;
    padding:0 20px;
    box-shadow:0 0 8px rgba(0,0,0,.2);
    background:white;
`

export const SearchInfoTitle= styled.div`
margin-top:20px;
margin-bottom:15px;
line-height:20px;
font-size:13px;
color:#969696;
`

export const SearchInfoSwitch= styled.span`
float:right;
cursor:pointer;
font-size:12px;
.spin{
    float:left;
    font-size:12px;
    margin-right:2px;
    transition:all .2s ease-in;
    transform-origin:center center;
}
`

export const SearchInfoItem= styled.a`
margin-right:10px;
margin-bottom:15px;
display:block;
float:left;
line-height:20px;
padding:0 5px;
font-size:12px;
border:1px solid #ddd;
color:#787878;
border-radius:3px;
`

export const Addition = styled.div`
    position : absolute;
    right:0;
    top:0;
    height:56px;
`;

export const Button = styled.div`
    float:right;
    line-height:38px;
    border-radius:19px;
    margin-top:9px;
    border:1px solid #ec6149;
    margin-right:20px;
    padding:0 20px;
    font-size:14px;
    box-sizing:border-box;
    &.reg{
        color:#ec6149;
    }
    &.write{
        color:white;
        background:#ec6149;
    }
`;