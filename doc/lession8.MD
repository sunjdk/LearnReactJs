## reactjs 从基础到入门实战-简书项目

### lession8 实现TodoList 新增删除功能

单页面版的新增删除


<ul>
  {
    this.state.list.map((item,index)=>{
      return (
        <li key={index}
            onClick={this.delHandle.bind(this.index)}
        >
        {item}
        </li>
      )
    })
  }
</ul>

constructor(props){
  super(props)
  this.state={
    inputValue:'',
    list:[]
  }
}

addHandle(){
  this.setState({
    list:[...this.state.list,this.state.inputValue],
    inputValue:''
  })
}

delHandle){
  const list=[...this.state.list]
  list.splice(index,1)
  this.setState({
    list:list
  })
}



