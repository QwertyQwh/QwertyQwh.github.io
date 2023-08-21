import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react"
import anime from "animejs"
const colorsLight = ["#b0d0d3","#ffcad4","#bfd6dd","#ffe5d9","#e0d9fc","#cad6ea","#fef9c2"]
const colorsDark = ["#7caca2","#ffaaba","#80a8b7","#ffd2c0","#c0b1fc","#a3bfe8","#fcf1a4"]


//todo ADD HIGHLIGHT bubble
export default forwardRef(function Colorie_Bubble({id,spin,phaseAngle,radius,onMouseEnter,onMouseLeave,onMouseClick},ref){
    const ref_thumbnail = useRef()
    const ref_bubble = useRef()
    const [rot, setrot] = useState(phaseAngle);
    const curPage = useRef(id)
    useImperativeHandle(ref, () => {
        return {
          GetPage(){
            return curPage.current
          },
          SetContent(data,page) {
            curPage.current = page
            if(data == null){
                ref_bubble.current.style.display = 'none'
            }else{
                ref_bubble.current.style.display = 'block'
                ref_thumbnail.current.textContent = data.thumbnail
            }
          },
          SetRot(rot, curFeaturedId, OrdinalCur,direction,OrdinalPrev){
              anime({
                targets:ref_bubble.current,
                translateY: spin*.5,
                delay: direction>0?(OrdinalPrev+3)*80: (4-OrdinalPrev)*80,
                rotate: (elmt,i)=>{
                  if(OrdinalCur == 0){
                      return rot
                  }
                  if(OrdinalCur >0){
                      return rot+0.05
                  }
                  return rot-0.05
              },
              easing: 'spring(1, 80, 12, 0)',
                translateX: spin,
                scale:id == curFeaturedId? 1.4:1,
                duration:800,
            })
            }

        };
      }, []);
    return (
        <div className= 'cornerBubble' 
        style = {{transform: ` translateY(${spin*.5}px) rotate(${rot}rad) translateX(${spin}px) `,
         width:`${radius*2}px`, 
         height:`${radius*2}px`,
         left:`${-radius}px`,
         bottom:`${-radius}px`,
         backgroundColor:colorsDark[id],
         borderColor: colorsDark[id]
        }}
        onMouseEnter={()=>onMouseEnter(id)}
        onMouseLeave={()=>onMouseLeave(id)}
        onClick={()=>onMouseClick(id)}
        ref={ref_bubble}>
        <div className='txtBubble'>
            <a style={{color: "#1e1e1e"}} ref={ref_thumbnail}>
    
            </a>
            </div>
        </div>
    )
})