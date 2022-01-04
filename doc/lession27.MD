## reactjs 从基础到入门实战-简书项目

### lession 27  使用Antd实现TodoList页面布局
组件文档

https://ant.design/components/list-cn/

```js
import { List, Typography, Divider } from 'antd';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];



<List
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <Typography.Text mark>[ITEM]</Typography.Text> {item}
        </List.Item>
      )}
    />
```



https://www.youtube.com/watch?v=FM3E45C3cAY&list=PL9nxfq1tlKKnza3MPogWqaYIPtdW_G2lF&index=33