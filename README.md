# react-Isomorphic-demo
react同构例子

## 项目初始化

````javascript
// 安装必须包
$ npm install --save react react-dom redux react-redux react-router immutable redux-immutable redux-actions redux-thunk babel-polyfill babel-register body-parser express morgan qs

// 安装开发依赖包
$ npm install --save-dev babel-core babel-eslint babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-1 eslint eslint-config-airbnb eslint-loader eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react html-webpack-plugin webpack webpack-dev-server redux-logger
````

## 需求
页面显示用户设定值，初始值为0，用户点击+按钮，初始值加一，用户点击-，初始值减一

## 思考
由于我们要使用isomorphic javascript 进行同构，整个客户端划分为三个部分，client（客户端）、server（服务端）、common（公用部分）
common放置的是客户端和服务端的公用部分（consts,actions,reducers,components,containers,store）

### 开发顺序
1. 根据需求把界面划分为一个一个组件component
    1. 由于整个需求比较简单，只需要定义为一个组件既可
    2. 定义组件为Counter
2. 根据界面组件，思考并定义出整个功能的state，定义的state放在consts目录
    1. state需要放置的内容很简单{state:count}
3. 结合组件component和state，抽出可能改变state的actions，根据component分类action，定义出actionTypes放置在consts目录，同时定义好对应的actions
4. 定义好components和containers
5. 定义好reducers和store提供给index.js使用

