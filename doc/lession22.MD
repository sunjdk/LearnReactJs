## reactjs 从基础到入门实战-简书项目

### lession 22 React 动画

关键代码：

```html
<div className={this.state.isShow?"show":"hidden"}>切换显示内容</div>

handleToggle(){
  this.setState({
    show:this.state.show?'false':'true'
  })
}
```

```css
.show{
  opiticy:1;
  tratransition: all 2s ease-in;
}
.hidden{
  opiticy:0;
  tratransition: all 2s ease-in;
}
```