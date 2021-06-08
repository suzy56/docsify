<!--
 * @Author: your name
 * @Date: 2021-06-08 14:14:22
 * @LastEditTime: 2021-06-08 14:51:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \docsify\docs\web_front\html&css.md
-->

# html、css 知识点

## jpg、渐进式 jpeg、webp、apng 图片，svg、svga、gif
| 特点     | jpg/jpeg/渐进式jpeg                                          | png8\|24\|32                                                 | apng                                                         | webp                                                         | svg                                                          | svga                                                         | gif                                                          |
| -------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 压缩方式 | 有损压缩                                                     | 无损压缩                                                     | 无损压缩                                                     | 无损&有损                                                    | /                                                            | /                                                            | 无损压缩                                                     |
| 动画     | 不支持                                                       | 不支持                                                       | 支持                                                         | 支持                                                         | 支持                                                         | 支持                                                         | 支持                                                         |
| 透明     | 不支持                                                       | 支持                                                         | 支持                                                         | 支持                                                         | 支持                                                         | 支持                                                         | 支持                                                         |
| 优点     | 采用有损压缩，压缩后体积更小；支持24位真彩色;  渐进式jpeg加载会先显示整个图片的模糊轮廓，随着扫描次数的增加，图片会越来越清晰 | 无损压缩；png32支持透明、半透明；最高支持24位真彩色图像以及8位灰度图像，从而彻底地消除锯齿边缘。png24不支持透明，png8只有1位alpha通道，只支持透明和不透明 | 支持png的所有优点；支持动画                                  | 体积小，质量高，适用于chrome生态                             | svg可以被非常多的工具读取和修改；svg与jpeg和gif图像对比，尺寸更小，且可压缩性更强；svg是可伸缩的；svg图像可在任何的分辨率下被高质量地打印；svg可以在图像质量不下降的情况下被放大；svg可以与js技术一起运行 | 可以控制动画的播放与暂停，可以监听动画的播放状态；体积相对于apng更小；可以随意地放大缩小而不失真；浏览器兼容性好 | 体积小；支持动画                                             |
| 缺点     | 有损压缩会损坏图片的质量；不支持透明/半透明                  | 与jpg的有损耗压缩想笔，png提供的压缩量较少；不支持动画       | 浏览器支持情况较差                                           | 浏览器支持较差                                               | 渲染成本相对于其他格式图片比较高，对于性能有影响；需要学习成本 | 需要js解析，同一页面不宜使用过多svga动画，否则会消耗过多性能 | 由于采用了8位压缩，做多只能处理256中颜色                     |
| 使用场景 | peg是最适web上面的摄影图片和数字照相机中。根据惊叹我们在页面中使用的商品图片、采用人像或者好、实物素材制作的广告更适合采用JPG格式保存 | 所含颜色很少、具有大块颜色相近的区域或亮度差异十分明显的较简单的图片则需要采用PNG。但也会有一些特殊情况，例如有些图像尽管色彩层次丰富，但由于图片尺寸较小，上面包含的颜色数量有限时，也可以尝试用PNG进行存储 | APNG 是 GIF 最好的替代了：实现简单，可用范围广，压缩比不错，显示效果好另外，在支持 canvas 的浏览器上，可以用 apng-canvas 直接显示 APNG 动画。APNG 压缩最好的工具目前是 apngasm，大部分图形化工具比如腾讯的 iSparta 都是基于这个工具开发的。 | 就是说相同质量的图片，WebP具有更小的文件体积。现在[网站](http://www.fly63.com/)上充满了大量的图片，如果能够降低每一个图片的文件大小，那么将大大减少浏览器和服务器之间的数据传输量，进而降低访问延迟，提升访问体验 | SVG跟上面这些图片格式最大的不同，是SVG是矢量图。这意味着SVG图片由直线和曲线以及绘制它们的方法组成。当你放大一个SVG图片的时候，你看到的还是线和曲线，而不会出现像素点。这意味着SVG图片在放大时，不会失真，所以它非常适合用来绘制企业Logo、Icon等 | 1、看得见的视觉方面的提升，动画质量可控；  2、看不见的性能方面的提升；  3、svga的使用，让开发分工更明确；  设计师所想即所成，设计出效果直接导出svga文件，减少设计与前端不断调试动画效果的沟通成本，从而前段开发者可以专注逻辑开发！  4、svga支持音频播放；  这一点因没有实际需求用到此功能 | 以上特点看出只有256种颜色的gif图片不适合照片，但它适合对颜色要求不高的图形（比如说图标、图表等 |



![选择图片](https://user-gold-cdn.xitu.io/2020/4/13/17173585a8d79a1a?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)





[参考链接1](http://www.fly63.com/article/detial/2084)

[参考链接2](https://juejin.cn/post/6844904125918871560#heading-10)

## iconfront 使用与实现原理

- 自动打包构建方法
- iconfont 兼容性写法
- fonthello、fontawesome、icomoon.io、iconfont.cn 线上工具
- font-awesome-animation
- svg sprites

## 页面响应式设计

- layout 布局响应式
- html 结构响应式
- css 样式响应式
- image 媒体响应式
- javascript 响应式
- media query 与平台判断
- 直出层响应式模板渲染判断

## css 样式统一化

- 清除不同浏览器的默认样式保持一致 reset
- 不同浏览器重写使用统一默认样式 normalize
- reset 和 normalize 的折衷 neat

## media query 与常见页面尺寸了解

- 媒体类型引入与媒体特性引入
- device-width 适应
- retina 屏幕适应

## em、rem 原理与实现

- rem 计算：width \* retina/10, 相当于屏幕宽度为 10rem
- 字体在 rem 情况下仍然使用 px
- 另外也可以使用 html 的 zoom 计算来实现屏幕适配

## sass/compass/less/postcss 常用语法与使用

- 常用语法功能
- 组件化 UI 设计管理
- 构建工具实现方案
- 雪碧图自动合成
- iconfont 自动接入等

## code4ui、code-4app、初页、maka 等

- 前端 dom 操作及时刷新页面
- 根据 dom 操作生成组件 config 配置保存到 db
- 根据 config 配置使用 r.js 或 webpack 打包
- 发布打包后输出文件

## 动画

- settimeout 与 setInterval 直接调用
- transform
- animation
- transition
- 3D 加速与动画加速
- requestAnimationFrame

  - css3 动画太少，无法全程控制，定时器动画有性能问题，requestAnimationFrame 是浏览器专门优化处理动画的 api

- 动画库

  - 缓动函数速查表：https://www.xuanfengge.com/easeing/easeing/
  - Ceaser: https://www.xuanfengge.com/easeing/ceaser/
  - cubic-bezier: https://cubic-bezier.com

## css 网格布局

- Responsive Grid System
- Fluid 960 Grid(adaptjs)
- Simple Grid

## 搜索引擎 SEO 基础

- 页面内容优化

  - 唯一的 H1 标题
  - img 设置 alt 属性
  - nofollow

- url 优化

  - 统一链接
  - 301 跳转
  - canonical

- robot 优化

  - robots.txt
  - meta robots
  - sitemap

- SEO 工具

  - 各种站长工具等

- phantomjs 做 ajax 站点优化

## 浏览器缓存种类，resources,webSQL，indexDB,localstorage,sessionStorage,cookie,app chache,cache storage,flash,file,aoi,ie userData

- store.js、cookie.js

## UI 框架

- bootstrap、jqwidgets、semantic ui、amaze ui
- 微信手 Q ui: frozenui、weui、blend ui
- extjs、echart 图表 ui