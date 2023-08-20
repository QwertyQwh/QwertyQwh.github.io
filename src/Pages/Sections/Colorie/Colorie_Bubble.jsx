import { useEffect } from "react"

const colorsLight = ["#b0d0d3","#ffcad4","#ffe5d9","#e0d9fc","#fef9c2"]
const colorsDark = ["#7caca2","#ffaaba","#ffd2c0","#c0b1fc","#fcf1a4"]


//todo ADD HIGHLIGHT
export default function Colorie_Bubble({id,spin,phaseAngle,txt,radius,onMouseEnter,onMouseLeave,onMouseClick}){
    
    return (
        <div className= 'cornerBubble' 
        style = {{transform: ` translateY(${spin*.5}px) rotate(${phaseAngle}rad) translateX(${spin}px) `,
         width:`${radius*2}px`, 
         height:`${radius*2}px`,
         left:`${-radius}px`,
         bottom:`${-radius}px`,
         backgroundColor:colorsDark[id],
         borderColor: colorsDark[id]
        }}
        onMouseEnter={()=>onMouseEnter(id)}
        onMouseLeave={()=>onMouseLeave(id)}
        onClick={()=>onMouseClick(id)}>
        <div className='txtBubble'>
            <a style={{color: "#1e1e1e"}}>
            {txt}
            </a>
            </div>
        </div>
    )
}