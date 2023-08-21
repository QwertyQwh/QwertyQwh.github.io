import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react"
import anime from "animejs"
const colorsLight = ["#b0d0d3","#ffcad4","#bfd6dd","#ffe5d9","#e0d9fc","#cad6ea","#fef9c2"]
const colorsDark = ["#7caca2","#ffaaba","#80a8b7","#ffd2c0","#c0b1fc","#a3bfe8","#fcf1a4"]


//todo ADD HIGHLIGHT bubble
export default forwardRef(function Colorie_Bubble({id,spin,phaseAngle,radius,onMouseEnter,onMouseLeave,onMouseClick},ref){
    const ref_thumbnail = useRef()
    const ref_bubble = useRef()
    const [rot, setrot] = useState(phaseAngle);
    useImperativeHandle(ref, () => {
        return {
          SetContent(data) {
            if(data == null){
                ref_bubble.current.style.opacity = 0
            }else{
                ref_bubble.current.style.opacity = 1
                ref_thumbnail.current.textContent = data.thumbnail
                anime({
                    targets:".cornerBubble",
                    translateY: spin*.5,
                    borderColor: (elmt,i)=>{
                        if(i == id){
                            return colorsLight[i]
                        }else{
                            return colorsDark[i]
                        }
                    },
                    rotate: (elmt,i)=>{
                            return -1
  
                    },
                    translateX: spin,
                    duration:10000,
                })
            }
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