## reactjs 从基础到入门实战-简书项目

### lession 19 React中ref的使用

```html
<input id="insertArea" className="input" value={this.state.inputValue} onChange={this.handleInputChange} ref={(input)=>{this.input=input}}/>
```

this.ul.querySelectorAll('div').length

this.setState((prevState)=>({
  list:[...prevState.list,prevState.inputValue],
  inputValue:''
}),()=>{
  console.log(this.ul.querySelectorAll('div').length)
})