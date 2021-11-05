## reactjs 从基础到入门实战-简书项目

### lession 20 React中的生命周期函数

生命周期函数指在某一个时刻组件会自动调用执行的函数

    Initialization             mounting                                updation                               unmounting

                                                         props                     states          

setup props and state      componentWillMount    componentWillReceiveProps  shouldComponentUpdate         componentWillUnMount       
                                  |                       |                     |       |
                                  |                       |                 true|       |false
                                render           shouldComponentUpdate    componentWillUpdate
                                  |                 |          |                    |
                                  |            true |          |false               |
                           componentDidMount     componentWillUpdate              render
                                                        |                           |
                                                        |                           |
                                                      render                componentDidUpdate
                                                        |
                                                        |
                                                componentDidUpdate









//在组建即将被挂载到页面的时候自动执行
componentWillMount(){
  console.log('componentWillMount')
}

render(){
  console.log('render')
}

//组建被挂载到页面之后执行
