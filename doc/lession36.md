## reactjs 从基础到入门实战-简书项目

### lession 36 Redux中发送异步请求获取数据

1.模拟 mocck 数据,作为服务器返回的响应
步骤：
  a.下载安装 青花瓷代理 charles
  b.创建list.json，写入要返回的数据
  ```json
  [
    "hello","dell","liph"
  ]
  ```
  c.配置青花瓷的 tools->maplocal 代理，让服务器请求直接的接口地址的时候返回我们设置好的 json 数据
  d.发送 axios 请求
  e.走一遍 redux 请求流程把数据回填到 state 中

https://github.com/zalmoxisus/redux-devtools-extension

  从高级部分拷贝window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE_({}) 部分的代码

  ```js
  
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

```