import imgDay from '../assets/images/blogs/meetfresh/light_dof3.png'
import imgNight from '../assets/images/blogs/meetfresh/dark_velvet_dof3.png'
import imgRef from '../assets/images/blogs/meetfresh/ref.png'

export default function Blog_MeetFresh(){
    return <>
        <p>这次做的是newport鲜芋仙。因为本人没进去过，所以只有从google maps偷了几张参考图。门店大概是这样的：</p>
        <p className="image"> <img src={imgRef}  /></p>
        最后出了两个版本。白天的版本：
      <p className="image"> <img src={imgDay}  /></p>
      晚上的版本：
      <p className="image"> <img src={imgNight}  /></p>
    
    </>
}