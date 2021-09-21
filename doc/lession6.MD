## reactjs 从基础到入门实战-简书项目

### lession 6 编写自己的组件 TodoList.js

```javascript
import React,{ Component, Fragment } from 'react';

class TodoList extends Component {
	render() {
		return (
			<Fragment>
            	<div><input /><button>提交</button></div>
                <ul>
                    <li></li>
                </ul>
            </Fragment>
		)
	}
}

export default TodoList;
```



注意：

- JSX 要求所有元素必须要有一个根元素

- 为了隐藏根元素，我们引入一个 Fragment 标签



