## reactjs 从基础到入门实战-简书项目

### lession 23 动画框架 react-transition-group

使用 react-transition-group 实现动画
官网：github react-transition-group


使用步骤：

第一步：
yarn add react-transition-group

第二步：
重启编辑器

第三步：

引入import { CSSTransition } from 'react-transition-group'


```html
<TransitionGroup>
  {
    this.state.list.map((item,index)=>{
      return (
        <CSSTransition
          timeout={1000}
          className='fade'
          unmountOnExit
          onEntered={(el)=>{el.style.color='blue'}}
          appear={true}
        >
          <div key={index}></div>
        </CSSTransition>
      )
    })
  }
</TransitionGroup>

