// 引用 babel-polyfill 避免浏览器不支援部分 ES6 用法
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { fromJS } from 'immutable';
import { Provider } from 'react-redux';
import CounterContainer from '../common/containers/CounterContainer';
import configureStore from '../common/store/configureStore';


// 从 server 取得传进来的 initialState。由于从字串转回物件，又称为 rehydration（覆水）
const initialState = window.__PRELOADED_STATE__;

// 由于我们使用 ImmutableJS，所以需要把在 server-side dehydration（脱水）
// 又在前端 rehydration（覆水）的 initialState 转成 ImmutableJS 资料型态，
// 并传进 configureStore 建立 store
const store = configureStore(fromJS(initialState));

// 接下来就跟一般的 React App 一样，把 store 透过 Provider 往下传到 Component 中
ReactDOM.render(
  <Provider store={store}>
    <CounterContainer />
  </Provider>,
  document.getElementById('app')
);
