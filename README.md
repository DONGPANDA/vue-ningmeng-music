# QQ-music日志
## recommond

### 轮播图使用better-scroll
```
npm install better-scroll --save
```
### 拉取数据
```
npm install jsonp --save
```
[jsonp地址](https://github.com/webmodules/jsonp)
> 对jsop插件进行一次封装,来获取数据,主要是处理url和传入的参数,并且指定callback

### 图片挂载问题
> 设置了图片的样式和slider的宽度以后 图片的大小没有变化还是很大  

- 在slider组件中,我是在mounted这个钩子函数中执行setSliderWidth这个函数设置轮播总长度和给slider-item添加class
- 而在recommond中我获取数据是在created这个初始化完成的钩子中获取,在created时候获取是为了保证后面挂载的正常进行,但是其实获取数据的过程是需要时间的
- 也就是说在我进行mounted这一步的时候,我的数据可能还没get回来,slider里面并没有元素,即使数据获取回来后,mouted已经结束,所以样式未添加上
- 解决 在slider标签增加 v-if="recommondData.length" 数据请求成功后再进行挂载


如图:
![改后](./debugPic/style1.png)

### 歌单Scroll组件的滚动问题

这个问题真的是无语

- 第一使用浏览器原本的scroll来滚动,可以滚,但是体验不好
- 第二用了vue-scroll组件,滚动完美,但是有一个问题,就是我里面放入了轮播图,当我再去滑动轮播图的时候,手指完全水平,不会有问题,如果在滑动也就是touchmove过程中y轴move的距离稍微大一点点就会导致页面向上滑动,也就是我只是单纯想滑动轮播图,会造成页面轮播图一起动,体验同样不好....看vue-scroll文档没找到调试的api
- 还是用了better-scroll,自己写了scroll组件,然后不能滚动,找问题找了一个多小时,样式,数据绑定都检查过,没问题,渲染正常,但就是不滚动,后来发现,scroll组件的slot用来将recommend渲染的数据插入,从而撑开scroller 来进行滚动,然后我在获取数据后输出数据,scrollInit后打印组件状态,如下图:

![滚动](./debugPic/style2.png)

可以看到,scrollInit的时机是先于数据获取的,所以scroll没有被数据撑开,就不能滚动,第三行是我在scroll标签上绑了dissList,并watch他的状态,如果变化就调用scroll的refresh方法,然后就能撑开并滚动了

#### 总结
这个问题和上个问题一样,因为数据get的过程是个异步过程,所以在挂载组件的时候要做相应处理

### player页面image问题
![player](./debugPic/play_bug1.png)

我在app中引入了play这个组件,组件默认不显示,在singer-detial中点击了相应的歌曲,然后sing-list将点击的歌曲信息发射出去,music-list捕获信息,然后通过vuex的actions来对state进行一系列的修改,其中有对currentIndex(当前点击的歌曲的index)的更新,然后通过在player页面getters获取计算出的currentSong,player页面中的image依赖currentSong,这里报的错误显而易见是说刚开始的currentSong是undefined
我开始找问题的时候,首先考虑的是,playingList被填充后才会显示player页面,但我项目开始run就报这个错了,这里我可能跟路由有点混,这里play组件挂在App上,不显示并不代表他没挂载,路由才是你切换到对应路径才开始挂载,切换到其他路径当前路由组件会销毁
#### test: 
  我在palyer组件created钩子函数console.log(1),singer路由组件created钩子函数console.log(2),
  结果很明显,开始输出1,切到singer输出2
  
  然后我就去看定义在getters里面的currentSong,在这里我对所有state状态都进行了代理,getters是可以对state进行运算的,这里currentSong就是通过currentIndex计算出,然后我发现了问题...我是给currentSong 计算后的数据,可是我没有考虑当currentIndex也不存在时,currentSong的值...默认不存在给一个{}就好了
#### 总结
 当getters里面的变量是通过其他state计算得出的时候,根据你使用的状态,要赋予默认值,这里和node里面从服务器读数据类似,如果我读到的是个空,我可以给他赋个[]

