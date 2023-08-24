import imgCover from '../assets/images/blogs/auguscript/cover.png'
import imgChrome from '../assets/images/blogs/auguscript/chrome.png'
import imgMeetFresh from '../assets/images/blogs/auguscript/light_dof3.png'
import videoMouse from '../assets/videos/blogs/auguscript/mouse.mp4'
import videoArt from '../assets/videos/blogs/auguscript/art.mp4'
import videoCoding from '../assets/videos/blogs/auguscript/coding.mp4'
import videoWriting from '../assets/videos/blogs/auguscript/writing.mp4'



export default function Blog_Auguscript(){
    return <>
    <p>讲个笑话，今天是半年来第一次看到chrome标签页的标题。平常是这个样子的：</p>
    <p className="image"> <img src={imgChrome}  /></p>
    <p>这两年看dev blog几次看到别人做Codevember——大概就是定下一个主题，然后十一月里每天写一个小snippet，最后汇总成三十个。</p>
    <p>过去一年里一直有在断断续续地构建网站。但是经常因为构想太复杂，超越自身能力，忙活几个礼拜就陷入停滞。比如之前写了一个用webgl的剪刀工具来切分canvas，从而达到同一canvas同时渲染很多场景，并且支持滚动的主页。代码大概花了一个月左右。结果虽然做出来了，但是帧率堪忧不说，要自己去做几十个美术资源也不太可能，只好搁置了。那之后精疲力竭，停了很长一段时间。</p>
    <p>八月十号夜里降落纽约，地铁里熟悉的臭气扑面而来。佛罗里达的太阳抓到一个毫无防备的外人，一点也没客气。不过没关系，自西藏一月之后，就白不回去了。</p>
     <p> 说起西藏，已经甩在身后一年有余，看看日历，到生日正好剩两个礼拜。</p>
    <p>两个礼拜能不能做完呢？这次务求可行性优先，在规划阶段就努力把任务量限制在期限内。 其实看<a href='https://www.awwwards.com/'>awwwards</a>会发现，互动好的网站，元素不需要太复杂，只要细节到位，风格统一，效果也不错。比如看起来能互动的组件都套上动画：</p>
    <p className="video"><video autoPlay={true} muted loop={true} playsInline = {true}><source src={videoArt} type="video/mp4"/></video></p>
    <p className="video"><video autoPlay={true} muted loop={true} playsInline = {true}><source src={videoCoding} type="video/mp4"/></video></p>
    <p className="video"><video autoPlay={true} muted loop={true} playsInline = {true}><source src={videoWriting} type="video/mp4"/></video></p>
    
      <p> 十一月还没到，不能做Codevember，就叫Auguscript。对于网页这块，我也是两年前才开始接触，所以自己这两年慢慢摸索的一套流程，对于想要开发网页不知从何入手的朋友可能有些许的帮助。所有资源和代码照例开源在<a href='https://github.com/QwertyQwh/QwertyQwh.github.io'>github</a>上。</p>
    <p className="image"> <img src={imgCover}  /></p>
    <p>先从用时说起，十四天的时间到今天正好截止。按照坐在电脑前的时间算，前七天比较悠哉，每天八小时左右。到了第八天见势不妙，提高到了十二小时。持续两天有点吃不消，转到十小时。这样总时长大概是8*7+12*2+10*5 = 130hr。</p>
<p> 这里还要提一个时间转化率的问题。刚刚进大学在华师的时候就发现一个奇怪的现象——图书馆每天人满为患，却只有大概六七成的人在学习。其他热门活动包括睡觉，玩手机，追剧。我也是图书馆的常客，经常观察到有些人每天以惊人的毅力准时出现在同一座位，拿出笔记本，挽起袖子，低下头——开始玩手机。我对玩手机没有任何意见，我不太理解的是，这些活动何必安排在图书馆呢？</p>
<p>后来我才慢慢体会到，这是一种很微妙的平衡。常见的情况是：你的头脑昏昏沉沉一点也不想干活，但是你的焦虑/恐惧又催促着你去行动，你被夹在中间里外不是人。于是折中方案就是去图书馆——安慰良心，然后娱乐——安慰头脑。然后顺便祈祷一下知识之神为你每天的朝圣之旅感动，在晚上做梦的时候赐予你一些启示之类的。</p>
<p>在这种情况下，每天蹲图书馆的时间看似是达标，但转化率可能连两成也不到——看一眼vscode，刷一下小红书；搜一下stackoverflow，回一下消息。也就是说，如果不在乎“良心”的形式主义要求的话，这和一个每天只专心干两个小时活儿，其他时间全在玩的人没什么区别。而且，他过得洒脱。</p>
<p>很多人也意识到了这一点，所以很高兴地解放了思想——我不在乎形式主义，那我每天就干两个小时活儿，从此仰天大笑出门去，我辈不做蓬蒿人了。但是这时多半会发生的是，你的转化率其实没有变，你的两小时转化成了二十分钟，刚好一顿饭的时间。</p>
<p>因为转化率低的本质并不是work-life balance不够。扪心自问，放一个礼拜假，回来效率会提高吗？我觉得我只会更不想工作。真正的原因多半是目标缺乏，任务碎片化，没有一二三四五的流程图。</p>
<p>放在计算机的语境里，可以理解为，频繁的更换cache，cpu进行大量无用运算，而且最重要的——你在跑一个程序，但是这个程序的API里完全没写最终的产出是什么。</p>
<p>To make matters worse，越长大，时间越被以各种各样的名目强征过去，到头来每天24小时确实都是自己的，却好像完全没有用在自己身上。</p>
<p>除去睡觉8hr，早晚洗漱做饭各1hr，通勤1hr，买菜洗衣健身等杂项1hr，每天可支配时间的上限在12hr左右。现在很闲，所以如果想的话可以全部利用起来。但是如果工作的话，这块基本是没有花头的。所以有效的方案还是只有提高转化率。</p>
<p>当然每个人有自己的生活方式，能过得满意就不错。如果真的能全放下的话，那上述全都是废话。不过据我观察，口头躺平的人虽多，实际放下的少之又少。这和图书馆玩手机其实异曲同工——掩耳盗铃的障眼法。</p>
      <p>回到这次的项目，因为精力集中，情绪稳定等等原因，这130hr的转化率能达到九成左右。如果从转cs开始一直是这个状态的话，现在可能已经是全栈大佬了吧笑。作为对比，两个月前blender的项目也都是两个礼拜，但是转化率可能只有五成不到。说的就是这俩：</p>
      <p className="image"> <img src={imgMeetFresh}  /></p>
      <p className="video"><video autoPlay={true} muted loop={true} playsInline = {true}><source src={videoMouse} type="video/mp4"/></video></p>
      <p>接下来是时间分配的问题，粗粗估算一下，130hr大概是这个组成。</p>
    <ul>
        <li>65hr = 代码逻辑</li>
        <li>25hr = 美术资源</li>
        <li>15hr = 调动画</li>
        <li>10hr = DNS迁移</li>
        <li>15hr = 内容迁移</li>
    </ul>
    <p style={{textAlign:"center"}}>——代码逻辑——</p>
    
    <p>这部分基本是从头开始写的。因为之前的主体完全是在GLCanvas上做花头，这次用不上。不过用到了之前的一些框架代码，比如router，自定义鼠标，logger等等。当然还有19个module。</p>
    <p>接下来为大家介绍js开发大礼包：react + webpack + threejs + r3f + animejs + react-router-dom + ...</p>
    <ul>
    <li><a href='https://webpack.js.org/'> webpack</a>是现在比较主流的bundler，负责管理module代码和各种非代码资源，然后把你那自己也看不懂的一大坨编译成一个或者多个运行js文件。</li>
    <li><a href='https://react.dev'> react </a>是我们的UI框架。有了它就可以告别html啦！采用react也是这次重写主要的变化。当然UI这块css或者scss也是不可少的。</li>
    <li><a href='https://threejs.org/'> threejs</a>负责在vanilla javascript里提供webgl的各种包装接口。因为网页的运行性能有限，所以光追什么就别想了。</li>
    <li><a href='https://docs.pmnd.rs/react-three-fiber/getting-started/introduction'> r3f（react three fiber）</a>和它的一些姊妹包一起负责在react中提供threejs的包装。是不是有点套娃的味道了？</li>
    <li><a href='https://animejs.com/documentation/#cssSelector'>animejs</a> 负责所有的2d动画。（但是这个库有一些设计上的缺陷，还有一个疑似移动端bug，之后会讲，慎用）</li>
    <li><a href='https://reactrouter.com/en/main'>react-router-dom</a> 负责所有页面间的navigation。说起来有点丢人，我之前以为设置地址唯一的办法就是本地放一堆html文件。都不知道原来还能做client side routing。不过这个feature有很多DNS是不支持的。别躲了，说的就是你，Github Pages。所以我这次迁移到了Netlify。这个后面会讲。</li>
    </ul>
    <p>需要注意的是，这些工具基本不相互依赖，比如你可以做一个纯react的单页网站，完全不用router。你也可以完全不用3D的素材，这样threejs和r3f就完全没必要了解。甚至你可以只用css的动画属性，这样animejs也可以省略。但是strip to the bare bones，webpack和react还是必备的。（或者其他替代的一个bundler和一个UIFrame）。如果想从头上手的话，<a href='https://create-react-app.dev/'>create-react-app</a>是一个不错的起点。</p>
    <p>最后，养成好习惯，每天打开vs前记得默默感谢所有开发者持续的更新和努力，Love to the Dev。</p>
    <p style={{textAlign:"center"}}>——美术资源——</p>
    <p>这块</p>
</>}