import imgCover from '../assets/images/blogs/auguscript/cover.png'
import imgChrome from '../assets/images/blogs/auguscript/chrome.png'



export default function Blog_Auguscript(){
    return <>
    <p>讲个笑话，今天是半年来第一次看到chrome标签页的标题。平常是这个样子的：</p>
    <p className="image"> <img src={imgChrome}  /></p>
    <p>这两年看dev blog好几次看到别人做Codevember，大概就是定下一个主题，然后十一月里每天写一个小snippet，最后汇总成三十个。</p>
    <p>过去一年里一直有在断断续续地构建网站。但是经常因为构想太复杂，超越自身能力，忙活几个礼拜就陷入停滞。比如之前写了一个用webgl的剪刀工具来切分canvas，从而达到同一canvas同时渲染很多场景，并且支持滚动的主页。代码大概花了一个月左右。结果虽然做出来了，但是帧率堪忧不说，要自己去做几十个美术资源也不太可能，只好搁置了。那之后精疲力竭，停了很长一段时间。</p>
    <p>八月十号夜里降落纽约，地铁里熟悉的臭气扑面而来。佛罗里达的太阳抓到一个毫无防备的外地人，一点也没客气，晒黑的同时烤掉一层皮。不过没关系，自西藏一月之后，就已经白不回去了。</p>
     <p> 回过头来，一年的时间过得很快，看看日历，到生日又只剩两个礼拜。</p>
    <p>所以这次务求可行性优先，在规划阶段就努力把任务量限制在两个礼拜内。 其实看<a href='https://www.awwwards.com/'>awwwards</a>会发现，互动好的网站，元素不需要太复杂，只要细节到位，风格统一，一样效果不错。</p>
      <p> 因为在八月写javascript的缘故，决定管这个项目叫Auguscript。网站所有资源和代码照例开源在github上：</p>
      <p></p>
    
</>}