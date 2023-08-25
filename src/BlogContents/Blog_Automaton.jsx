import imgZoom from '../assets/images/blogs/automaton/testMouse4.png'
import imgBox from '../assets/images/blogs/automaton/box.png'
import imgRadio from '../assets/images/blogs/automaton/testRadio4.png'
import imgSpring from '../assets/images/blogs/automaton/testMainspring.png'
import imgFloor from '../assets/images/blogs/automaton/testfloor1.png'
import imgFace1 from '../assets/images/blogs/automaton/testface1.png'
import imgFace2 from '../assets/images/blogs/automaton/testface2.png'
import imgFace3 from '../assets/images/blogs/automaton/testface3.png'
import imgFace4 from '../assets/images/blogs/automaton/testface4.png'
import imgFace5 from '../assets/images/blogs/automaton/testface5.png'
import videoFinal from '../assets/videos/blogs/automaton/final.mp4'


export default function Blog_Automaton(){
    return <>
        <p>最近对木工视频很感兴趣，比如说<a href='https://www.youtube.com/@stoccafissodesign2569/featured'>这个youtuber</a>。从他做的一个小模型出发做了个动画。 </p>
        <p>先把木盒，收音机，发条分别做好：</p>
        <p className="image"> <img src={imgBox}  /></p>
        <p className="image"> <img src={imgRadio}  /></p>
        <p className="image"> <img src={imgSpring}  /></p>
        <p>然后拼起来，把耳机和人物装上去。</p>
        <p className="image"> <img src={imgFloor}  /></p>
        <p>然后测试一下各种表情。</p>
        <p className="image"> <img src={imgFace1}  /></p>
        <p className="image"> <img src={imgFace2}  /></p>
        <p className="image"> <img src={imgFace3}  /></p>
        <p className="image"> <img src={imgFace4}  /></p>
        <p className="image"> <img src={imgFace5}  /></p>
        <p>然后上色。</p>
        <p className="image"> <img src={imgZoom}  /></p>
        <p>然后加上动画就完成了。</p>
        <p className="video"><video autoPlay={true} muted loop={true} playsInline = {true}><source src={videoFinal} type="video/mp4"/></video></p>
    </>
}