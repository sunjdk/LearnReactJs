 ## reactjs 从基础到入门实战-简书项目

### lession40 如何使用React-redux（1）

1.删除之前写的 store 中的 redux 相关文件
2.删除todolist.js 组件


使用 react-redux 的步骤：
1. 安装react-redux 命令 yarn add react-redux

2. 创建 TodoList.js 组件

3. 重启服务器


provider 是把 redux 的 store 存储挂载到被它包裹的所有组件上

redux 的 connect 方法是让 让 TodoList 组件和 store 存储做连接 

mapStateToProps 方法是让 store 存储中的数据和 props 中的数据做关系映射 让props 可以 调用 store 存储中的数据

mapDispatchToProps 方法是 把 store.dispatch 方法 挂载到 props 上