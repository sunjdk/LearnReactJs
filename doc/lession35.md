## reactjs 从基础到入门实战-简书项目

### lession 35 无状态组件 
https://www.youtube.com/watch?v=1xpAU_Yt1TY&list=PL9nxfq1tlKKnza3MPogWqaYIPtdW_G2lF&index=39


React 16.8版本之后，这个应该叫函数组件而不是无状态组件，因为现在通过 hook，函数组件也可以有状态了。有状态组件和无状态组件之间的区别在于有无 state。

1.无状态组件就是组件中只有一个rander 函数的组件，前面的TodoListUI 就是一个无状态组件
2.demo
```js
const TodoListUI=(props)=>{
  return (
    <div>
      <Input value={props.inputValue}
        placeholder='todo info'
        onChange={props.handleInputChange}
      >
      <Button type="primary" onClick={props.handleBtnChange}>

      <List.Item
        bordered
        dataSource={props.list}
        renderItem={(item,index)=>(List.Item onClick={(index)=>{props.handleItemDelete}})}
      >
      {item}
      </List.Item>
    </div>
  )
}
```
3.无状态组件的性能比较高，因为它就是一个函数，所以性能高
4.使用场景
用来定义UI 组件
没有逻辑操作的时候
只负责页面的渲染