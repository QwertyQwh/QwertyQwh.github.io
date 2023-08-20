import { useEffect } from "react"

export default function Colorie_Bubble({spin,phaseAngle,txt,radius}){
    return (
        <div className= 'cornerBubble' style = {{transform: `translateX(${Math.cos(phaseAngle)*spin}px) translateY(${-Math.sin(phaseAngle)*spin+spin*0.5}px)`, width:`${radius*2}px`, height:`${radius*2}px`,left:`${-radius}px`,bottom:`${-radius}px`,}}>
        <div className='txtBubble'>
            <a style={{color: "#1e1e1e"}}>
            {txt}
            </a>
            </div>
        </div>
    )
}