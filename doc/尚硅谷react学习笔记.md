课程学习地址：

https://www.bilibili.com/video/BV1wy4y1D7JT?from=search&seid=236354561721815800&spm_id_from=333.337.0.0

lession 1课程要点：

1.react 简介

react 是什么

react 是用于构建用户界面的 JavaScript 库

- 发送请求获取数据
- 处理数据(过滤、整理格式等)
- 操作DOM呈现页面

⒉谁开发的?

- 由Facebook开发，且开源。
- 起初由Facebook的软件工程师Jordan Walke
- 于2011年部署于Facebook的newsfeed。
- 随后在2012年部署于Instagram。
- 2013年5月宣布开源。
- 近十年“陈酿”React 正在被腾讯、阿里等一线大厂广泛使用。

3.为什么要学?

- 原生JavaScript操作DOM繁琐、效率低（ DOM-API操作UI )。
- 使用JavaScript直接操作DOM，浏览器会进行大量的重绘重排。
- 原生JavaScript没有组件化编码方案，代码复用率低。

4.React的特点

- 采用组件化模式、声明式编码，提高开发效率及组件复用率。
- 在React Native中可以使用React语法进行移动端开发。
- 使用虚拟DOM+优秀的Diffing算法，尽量减少与真实DOM的交互。

1)声明式编码

2)组件化编码

3) React Native编写原生应用-

4)高效（优秀的Diffing算法）



5.学习react 之前要掌握的javascript基础知识

- 判断this 的指向
- class(类)
- es6语法规范
- npm 包管理
- 原型、原型链
- 数组常用方法
- 模块化

lession2 hello_react 案例

https://www.bilibili.com/video/BV1wy4y1D7JT?p=2&spm_id_from=pageDriver

react 相关js 库

- react.js：react 核心库
- react-dom.js:提供操作 DOM 的 react 扩展库
- bable.min.js 解析 JSX 语法代码转为 JS 代码的库

bable.js 的作用

- es6-es5
- jsx->js 

```html
<body>
	<div id="test"></div>
	
    <script type="text/javascript" src="../js/react.development.js"></script>
    <script type="text/javascript" src="../js/react-dom.development.js"></script>
    <script type="text/javascript" src="../js/bable.min.js"></script>
    <script type="text/bable">
    	//1.创建虚拟dom
    	const VDOM=<h1>Hello,React</h1>
    	//2.渲染虚拟dem 到页面
    	ReactDOM.render(VDOM,document.getElementById('test'))
    </script>
</body>
```



```html
const VDOM=React.createElement('h1',{id:'title'},'Hello,React')
ReactDOM.render(VDOM,document.getElementById('test'))
```

lession4: react 虚拟dom 和 真实dom

https://www.bilibili.com/video/BV1wy4y1D7JT?p=4



```html
<script type="text/babel">
	//1.创建虚拟dom
	const VDOM=(
		<h1 id="title">
			<span>Hello,React</span>	
    	</h1>
	)
	//2.渲染虚拟dom 到页面
	ReactDOM.render(VDOM,document.getElementById('test'))
	console.log('虚拟dem',VDOM)
	console.log(typeof VDOM)
	console.log(VDOM instanceof Object)
	const TDOM=document.getElementById('demo')
	console.log(TDOM)
	debugger;
</script>
```

关于虚拟DOM:
1.本质是0bject类型的对象（(一般对象)

2.虚拟DOM填较“轻”，真实DOM比较“重”，因为虚拟DOW是React内部在用，无需真实DOM上那么多的属性。

3.虚拟DOM最终会被React转化为真实DOM，呈现在页面上-

lession 5: jsx语法规则