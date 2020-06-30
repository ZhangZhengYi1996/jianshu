import React from 'react';
import ReactDOM from 'react-dom';
import './style.js';
import GlobalStyle from './style';
import IconStyle from "./statics/icons/iconfont.js";
import App from './App';

ReactDOM.render(
  <div>
    <GlobalStyle />
    <IconStyle />
    <App />
  </div>
  ,
  document.getElementById('root')
);
