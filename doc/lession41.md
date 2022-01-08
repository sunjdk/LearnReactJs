 ## reactjs 从基础到入门实战-简书项目

### lession41 使用React-redux完成TodoList功能 

https://www.youtube.com/watch?v=DiY6_w4BuyQ&list=PL9nxfq1tlKKnza3MPogWqaYIPtdW_G2lF&index=46


1.给ui组件绑定按钮事件
2.在两个映射中写业务逻辑
3.在reducer 中写业务实现方法


export default connect(mapStateToProps,mapDispatchToProps)(TodoList);

把 store 中的业务逻辑数据，派发发 和 ui 组件用 connect 函数连接起来的时候，ui 组件就是一个容器组件了