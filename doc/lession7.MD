## reactjs 从基础到入门实战-简书项目

### lession7 React 中的响应式设计思想和事件绑定

```
import React, { component,Fragment } from 'react'

class TodoList extends Component {
	constructor(props){
		super(props);
		this.state = {
			inputValue:'',
			dataList:[]
		}
	}
	
	render() {
		return {
			<Fragment>
				<div>
					<input value={this.state.inputValue}
					onChange = {this.handleInputValue.bind(this)}
					<button>提交</button>
				</div>
				<ul>
					<li>前端学习</li>
					<li>learn react</li>
				</ul>
			</Fragment>
		}
	}
	handleInputValue(e){
		this.setState({
			inputValue:e.target.value
		})
	}
}

export default TodoList;
```





