## reactjs 从基础到入门实战-简书项目

### lession 23 过渡动画

```css
.show{
  animation:show-item 2s ease-in forwards;
}
.hide{
  animation:hide-item 2s ease-in forwards;
}

@keyframes hide-item{
  0%{
    opacity:1;
    color:red;
  }
  50%{
    opacity:0.5;
    color:green
  }
  100%{
    opacity:0;
    color:blue
  }
}

@keyframes show-item{
  0%{
    opacity:1;
    color:red;
  }
  50%{
    opacity:0.5;
    color:green
  }
  100%{
    opacity:0;
    color:blue
  }
}

```