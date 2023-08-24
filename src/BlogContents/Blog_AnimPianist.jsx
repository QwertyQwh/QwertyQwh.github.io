import img18 from '../assets/images/blogs/animPianist/0018.jpg'
import img127 from '../assets/images/blogs/animPianist/0127.jpg'
import img121 from '../assets/images/blogs/animPianist/0121.jpg'
import imgAttempt1 from '../assets/images/blogs/animPianist/attempt1.png'
import videoWalk from '../assets/videos/blogs/animPianist/pianist_walk_linear_without_noise.mp4'
import videoCountdown from '../assets/videos/blogs/animPianist/countdown_test_rotation.mp4'
import videoCreep from '../assets/videos/blogs/animPianist/slime_creeping.mp4'
import videoBounce from '../assets/videos/blogs/animPianist/slime_bouncing_forward (2).mp4'
import videov2 from '../assets/videos/blogs/animPianist/v2.mp4'
import videoPop from '../assets/videos/blogs/animPianist/pop.mp4'
import video36 from '../assets/videos/blogs/animPianist/0001-0036.mp4'
import video180 from '../assets/videos/blogs/animPianist/0001-0180.mp4'
import videoHelmet from '../assets/videos/blogs/animPianist/helmet.mp4'
import videoBlack from '../assets/videos/blogs/animPianist/black.mp4'
import videoWhite from '../assets/videos/blogs/animPianist/white.mp4'


export default function Blog_AnimPianist(){
    return (<>
    <p>21年九月的时候慢慢有了想法，从九月中旬到10月8号下午两点半Pr导出完毕，中间恰逢中秋和国庆加起来十天的假期，很好的秋日暖阳，可惜全部在家闭关，搞不懂当时是中了什么邪。</p>
	<iframe src="https://player.bilibili.com/player.html?aid=590910177&bvid=BV1oq4y1R7eb&cid=422292073&page=1&high_quality=1&danmaku=0"  width="100%" style={{height: "50vw"}}> </iframe>
    <p> 最初想做小动画的动机其实是很可笑的，现在都不大好意思讲。等若干年后头发白了再讲出来丢脸。结果上来说也算检验断断续续的3D学习成果，就当这是动机吧。 </p>
    <p> 说是小动画，动画的部分反倒是最简陋的。除了走路没有用到别的，也是考虑到水平和时间有限。 </p>
    <p className="video"><video autoPlay muted loop src={videoWalk} /></p>
    <p> 甚至像史莱姆这样一团浆糊的玩意儿，干脆连骨骼也不做，整体变形就完了。 </p>
    <p className="video"><video autoPlay muted loop src={videoCountdown} /></p>
    <p> 虽然软踏踏的东西要移动起来还是调试了很久。 </p>
    <p className="video"><video autoPlay muted loop src={videoCreep} /></p>
    <p> 对了，偶尔它还要跳一跳。 </p>
    <p className="video"><video autoPlay muted loop src={videoBounce} /></p>
    <p> 有几个场景做起来还是蛮好玩的。比如这个打雷。 </p>
    <p className="video"><video autoPlay muted loop src={videov2} /></p>
    <p> 再比如这个气球。 </p>
    <p className="video"><video autoPlay muted loop src={videoPop} /></p>
    <p> 这个蓝色的Romeo也算是一条线。被整的有点惨。 </p>
    <p className="image"> <img src={img18}  /></p>
    <p className="image"> <img src={img121}  /></p>
    <p className="image"> <img src={img127}  /></p>
    <p className="image"> <img src={imgAttempt1}  /></p>
	<p> 特别是这里，感觉打的好用力啊，心都碎了。 </p>
    <p className="video"><video autoPlay muted loop src={video36} /></p>
    <p> 这个头盔的材质我还是满意的。 </p>
    <p className="video"><video autoPlay muted loop src={videoHelmet} /></p>
    <p> 最后的几个场景花去的时间反倒最多——史莱姆小人一个个排动作很烦。 </p>
    
    <p className="video"><video autoPlay muted loop src={video180} /></p>
    <p> 天天盘坐在床头桌前，工时的最大头还是等渲染看效果。做几个版本对比，可怜的GTX就要干加倍的活。 </p>
    <p className="video"><video autoPlay muted loop src={videoWhite} /></p>
    <p className="video"><video autoPlay muted loop src={videoBlack} /></p>

    <p> 关于文字倒不想说什么。好比体温升到了40度口吐白沫讲了胡话，退烧后别人讲给自己听自己也觉得好笑，不知道在说啥。稍微值得一提的是，这种默剧一样的形式是因为喜欢加藤久仁生和他2003年的短片《某个旅人的日记》。 </p>
    <p> 这是自己做的第二个小动画，也算正经做的第一个。不得不说我真会给自己挖坑，还搞了个“未完待续”。以后有机会再填上吧。 </p>
  
    


    </>)
}