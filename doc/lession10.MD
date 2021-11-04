## reactjs 从基础到入门实战-简书项目

### lession 10 react 父子组建传值方法

1.父组件向子组件传值用属性绑定方式
2.子组件向父组件传值用事件触发方式


父组件调用子组件

<children content={item}/>

子组件内容

children.js

this.props.content


//////////////////子组件向父组建传值/////////////////////
父组件内容

<children content={item} index={index} del={this.delHandle.bind(this)}/>

children.js

constroctor(props){
  super(props)
  this.handleClic=this.handleClick.bind(this)
}

<div onClick={this.handleClick}>{this.props.content}</div>

handleClick(){
  this.prop.del(this.props.index)
}




