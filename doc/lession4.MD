## reactjs 从基础到入门实战-简书项目

### lession4 react 组件介绍

组件的定义：react 中的组件就是页面中的碎片

react 组件定义demo

```
import React,{ Component } from 'react'

class App extends React.Component {
	render() {
		return (
			<div>
				hello world
			</div>
		);
	}
}

export default App;
```

组件调用：

```
import React from 'react';
import ReactDom from 'react-dom';

import App from './App';

ReactDom.render(<App />,document.getElementById('root'));
```

在组件文件中，凡是用到了JSX语法，就必须引入 ReactJS   import React from 'react';