## reactjs 从基础到入门实战-简书项目

### lession 6 最基础的 JSX 语法

1.使用组件的时候不能用单双引号返回字符串的形式

2.可以自定义标签

3.自己创建的标签必须大写，使用原生的html标签小写字母开头



扩展知识：

react 使用 JSX 来代替常规的 JavaScript，JSX 是一个看起来很像 xml 的 JavaScript 语法扩展。我们不需要一定使用 JSX ,但它有以下优点：

1.  JSX 执行更快，因为它在编译为 JavaScript 代码后进行了优化。

2. 它是类型安全的，在编译过程中就能发现错误

3. 使用 JSX 编写模板更加简单快速

```
const element = <h1>Hello World1</h1>;

var myDivElement=<div className="foo" />;
ReactDom.render(myDivElement,document.getElentmentById('exapmple'));
```

注意：由于 JSX 就是JavaScript，一些标识符像 class 和 for 不建议作为 xml 属性名，作为替代，React DOM 使用 className 和 htmlFor 来做对应的属性

使用 JSX ,JSX 看起来类似 HTML ，实例：

```
ReactDOM.render(
	<h1>Hello World!</h1>,
	document.getElementById('example')
);
```

我们可以在以上代码中嵌套多个HTML标签，需要使用一个 div 元素包裹它，实例中的 p 元素添加了自定义属性 data-myattribute,添加自定义属性需要使用 data- 前缀。

```
ReactDOM.render(
	<div>
		<h1>前端教程</h1>
		<h2>欢迎学习</h2>
		<p data-myattribute = "somevalue">这是一个很不错的 JavaScript 库！</p>
	</div>
	,
	document.getElementById('example')
)
```

独立文件形式使用  JSX

我们创建一个 helloworld_react.js 的文件，内容如下：

```
ReactDOM.render(
	<h1>Hello,World!</h1>，
	document.getElementById('example')
)
```

外部引用：

```
<body>
	<div id="exapmle"></div>
	<script type="text/bable" src="helloworld_react.js"></script>
</body>
```

JSX 中的 JavaScript 表达式，表达式写在{} 中，实例

```
ReactDOM.render(
	<div>
		<h1>{1 + 1}</h1>
	</div>
	,
	document.getElementById('example')
)
```

JSX 中不支持 if-else,但是可以使用三元表达式

```
ReactDOM.render(
	<div>
		<h1>
			{i == 1 ? 'True' : 'false'}
		</h1>
	</div>
	,
	document.getElementById('example')
)
```

JSX 中使用样式，我们用 camelCase 语法来设置内联样式，React 会在指定元素数字后自动添加px。

```
var myStyle = {
	fontSize:100,
	color:'#ff0000'
};
ReactDOM.render(
	<h1 style = {myStyle}>前端教程</h1>,
	document.getElementById('example')
)
```

JSX 中使用注释，注释要写在花括号中

```
ReactDOM.render(
	<div>
		<h1>前端教程</h1>
		{/*注释。。。。*/}
	</div>，
	document.getElementById('example')
)
```

JSX 中使用数组，JSX 插入数组后，会自动展开所有成员

```
var arr=[
	<h1>前端开发教程</h1>,
	<h2>学的不仅是技术，更加是梦想</h2>,
];
ReactDOM.render(
	<div>{arr}</div>,
	document.getElementById('example')
)
```

