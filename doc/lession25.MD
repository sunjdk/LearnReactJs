## reactjs 从基础到入门实战-简书项目

### lession 25 Redux 概念简述

Redux = Reducer + Flux      
=>facebook

工作流程


dispatch(action)              (previousState,action)
  Action                                         
  Creator                     Store                   Reducers



                              (state)
                              React
                              Components



我们可以把它写成一个借书的人，那就把这个流程理解成一个图书馆的一个流程，我们一点点来说，component代表的是一个借书的用户，指的是什么呢？当我在图书馆借书的时候，一般我要跟图书馆的管理员说，爱我要借什么书，那么你要借什么书这个语句的表达，这个数据的传递我们就把它action create, 大家可以把。
把这个action锤子是小成你说的那句话，你要借什么书？你说的这句话好，大家可以在下面做一个注释，他指的是你说的要借什么书的这句话，再来看，我们说到图书馆借书你要和一个人打交道，这个人呢，就是图书馆的这个管理员他们负责整个图书馆的图书的管理，这个story大家就可以把它理解成图书馆的这个管理员，所以你在多少上面写一个管理员，我们说一个图书馆的管理员，他是没办法记住图书馆所有书籍的存储情况的，所以呢，一般来说它都需要有一个记录本，你要借什么书，他先查一下，看一下这个书有没有，你要还什么书，他要查一下，他要把你还的书放在某一个位置，那么这个本在这张图上对应的就是什么呢，就是我们说的是大家可以把reduce下面写一个注释，把us写成什么也可以写成这个记录本，但整个流程我们就串起来了，大家来看，首先假设我要借一本书。
得先存在，他们要说一句话说，我要借这本书存在了，接着这句话被谁听见了，被这个图书馆的管理员听见了，他都要去帮你找这本书，可是呢，他自己记不住，这个时候他会去查阅他的这个小手册，销售车上告诉他我这本书放在哪，这样的话我这个管理员就知道了，这本书放在哪里了，找到这本书之后管理员会把对应的这本书给到这个熟人，这就是一个实际的例子，通过这个实际的例子呢，我们简单的说了一下这个工作流程，那么我们下面把这个实际的例子转化成我们代码中的一个理解，怎么去理解呢？首先我有一个组建我的这个组建呢，要去获取到中的一些数据，然后我就跟四嫂说，我说我要获取数据啊，那你说的这句话就是action create。