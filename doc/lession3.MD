## reactjs 从基础到入门实战-简书项目

### lession3  工程目录简介

1.项目命令： npm run start

2.目录介绍

1、git 是 git文件夹

2、dist 是打包后文件放置地方

3、src 是源码文件，一般做开发就在这个文件夹。

4、babelrc是babel配置文件

5、webpack.config.js是webpack配置文件

6、server.js 是 express服务器文件

7、editorconfig 是编辑器配置文件，用来同意团队开发的编辑器配置

8、node_modules是各个插件存放位置

二 入口文件

1.网页入口文件放在 dist/index.html

2.react入口文件放在 src/app.js



#### 三 源码文件目录架构 

1.actions 存放react action路径

2. common 存放公共文件

3. components 存放 react jsx文件

4. images 存放图片

5. stores 存放 react action具体执行方法

#### 四 其他的文件夹 

1.api文件夹存放接口文件

2. style文件存放自定义的样式文件



├── README.md 项目介绍

├── package.json npm包配置文件，里面定义了项目的npm脚本，依赖包等信息

├── package-lock 上线锁定版本信息

├── gitignore 这个是git的选择性上传的配置文件

├── src 源码目录 这个目录里边放的是我们开放的源代码

│ ├── App.css

│ ├── App.js 这个文件相当于一个方法模块，也是一个简单的模块化编程

│ ├── App.test.js

│ ├── index.css

│ ├── index.js 这个就是项目的入口文件

│ ├── serviceWorker.js  这个是用于写移动端开发的，PWA必须用到这个文件，有了这个文件，就相当于有了离线浏览的功能。

├── public 公共文件，里边有公用模板和图标等一些东西

├── favicon.ico : 这个是网站或者说项目的图标，一般在浏览器标签页的左上角显示

├── index.html : 首页的模板文件，我们可以试着改动一下，就能看到结果。

├── mainifest.json：移动端配置文件。





