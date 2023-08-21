import { useRef,useEffect, useState, useContext } from 'react';
import { Canvas } from '@react-three/fiber';
import { ACESFilmicToneMapping,LinearToneMapping,CineonToneMapping,ReinhardToneMapping,NoToneMapping } from 'three';
import { Perf } from 'r3f-perf';
import ColorieShowcase from './ColorieShowcase';
import anime from 'animejs';
import { useControls,button } from 'leva';
import { useEffectOnce, useEventListener, useInterval, useWindowSize } from 'usehooks-ts';
import { PerspectiveCamera,OrbitControls, Environment } from '@react-three/drei';
import Logger from '../../../Debug/Logger';
import { Lightformer } from '@react-three/drei';
import { DeviceContext } from '../../../Contexts/Contexts';
import Colorie_Bubble from './Colorie_Bubble';
import { Color } from 'three';
import BlogCatalog from '../../../Catalogs/BlogCatalog';
import { Number2Month } from '../../../Utils/Utils';

const num_bubbles = 7
const bubbleInterval = Math.PI/12
// const fakers = {bubbleRad: 30,bubbleSpin:300,paletteRad:250,angleOffset:0}
const colorsLight = ["#b0d0d3","#ffcad4","#bfd6dd","#ffe5d9","#e0d9fc","#cad6ea","#fef9c2"]
const colorsDark = ["#7caca2","#ffaaba","#80a8b7","#ffd2c0","#c0b1fc","#a3bfe8","#fcf1a4"]



export default function Section_Colorie(props){
    Logger.Warn("Colorie is rerendering")
    const blogList = useRef([])
    const ref_canvas = useRef()
    const ref_Palette = useRef()
    const ref_showcase = useRef()
    const ref_ColorDot = useRef()
    const ref_Title = useRef()
    const ref_About = useRef()
    const ref_Date = useRef()
    const ref_MonthDay = useRef()
    const ref_Year = useRef()
    const device = useContext(DeviceContext)
    const animCtrl_Transition = useRef(false)

    const [bubbleRotOffset, setbubbleRotOffset] = useState(-Math.PI/3);
    const CurIndex = useRef(0)
    const [paletteRad, setpaletteRad] = useState(250);
    const [bubbleSpin, setbubbleSpin] = useState(300);
    const [bubbleRad, setbubbleRad] = useState(30);
    const [colorDark, setColorDark] = useState("#7caca2");
    const [colorLight, setColorLight] = useState("#b0d0d3");
    const refs_bubbles = [...Array(num_bubbles)].map(()=>useRef())
    
    
    useEffectOnce(()=>{
        anime.timeline({loop:true}).add({
            targets: ref_canvas.current,
            translateY:['-1vh','1vh'],
            duration:1500,
            easing:'easeInOutSine'
        }).add({
            targets: ref_canvas.current,
            translateY:['1vh','-1vh'],
            duration:1500,
            easing:'easeInOutSine'
        })
        Object.entries(BlogCatalog).forEach((elmt,id)=>{if(elmt[1].sectionId == props.id){blogList.current.push(elmt)}})
        ref_Title.current.textContent = blogList.current[CurIndex.current][1].title
        ref_About.current.textContent = blogList.current[CurIndex.current][1].about
        const date = blogList.current[CurIndex.current][1].date
        ref_MonthDay.current.textContent = `${Number2Month(date.month)}  ${date.day}`
        ref_Year.current.textContent =  date.year
        refs_bubbles.forEach((elmt,id)=>refs_bubbles[id].current.SetContent(id<blogList.current.length? blogList.current[id][1]:null))
   

    })

    

    const ColorSwell = ({x,y},color,callback) =>{
        ref_ColorDot.current.style.top = y
        ref_ColorDot.current.style.left = x
        ref_ColorDot.current.style.backgroundColor = color
        anime.timeline().add({
          targets: ref_ColorDot.current,
          scale: [0,150],
          duration:800,
          easing: 'easeInQuad',
          complete: ()=>{callback()},
        })
    }
//#region BubbleEvents
    const IndexToRotation = (bubble_id)=>{
        
    }



    const TransitTo= (id)=>{
        if(animCtrl_Transition.current){
            return
        }
        animCtrl_Transition.current = true
        Rotate()
        ColorSwell({x:'10%',y:'100%'},colorsLight[id],()=>{setColorLight(colorsLight[id]);   setColorDark(colorsDark[id])})
        anime.timeline().add({
            targets:ref_Title.current,
            translateY: [0,-100],
            opacity:[1,0],
            easing: 'easeInSine',
            duration:600,
            complete:()=>{
                ref_Title.current.textContent = blogList.current[id][1].title
            }
        }).add({
            targets:ref_About.current,
            translateY: [0,-100],
            opacity:[1,0],
            easing: 'easeInSine',
            duration:600,
            complete:()=>{
                ref_About.current.textContent = blogList.current[id][1].about
            }
        },"-=400").add({
            targets:ref_Date.current,
            translateY: [0,-100],
            opacity:[1,0],
            easing: 'easeInSine',
            duration:600,
            complete:()=>{
                const date = blogList.current[id][1].date
                ref_MonthDay.current.textContent = `${Number2Month(date.month)}  ${date.day}`
                ref_Year.current.textContent =  date.year
            }
        },"-=400").add({
            targets:ref_Title.current,
            translateY: [100,0],
            opacity:[0,1],
            easing: 'easeOutSine',
            duration:600,
        }).add({
            targets:ref_About.current,
            translateY: [100,0],
            opacity:[0,1],
            easing: 'easeOutSine',
            duration:600,
            complete:()=>{
                animCtrl_Transition.current = false
            }
        },"-=400").add({
            targets:ref_Date.current,
            translateY: [100,0],
            opacity:[0,1],
            easing: 'easeOutSine',
            duration:600,

        },"-=400")
        ref_Palette.current.style.backgroundColor = colorsDark[id]
        anime({
            targets:ref_Palette.current,
            scale:[0,1],
            duration:800
        })
        if(id-3>=0){
            //In this case we need to set the content of the leftmost bubble
        }
        CurIndex.current = id

    }

    const OnBubbleClick = (id) =>{
        TransitTo(id)
    }

    const OnBubbleEnter = (id)=>{
        anime({
            targets:".cornerBubble",
            translateY: bubbleSpin*.5,
            borderColor: (elmt,i)=>{
                if(i == id){
                    return colorsLight[i]
                }else{
                    return colorsDark[i]
                }
            },
            rotate: (elmt,i)=>{
                if(i == id){
                    return bubbleRotOffset+i*bubbleInterval
                }
                if(i>id){
                    return bubbleRotOffset+i*bubbleInterval+0.05
                }
                return bubbleRotOffset+i*bubbleInterval-0.05
            },
            scale: (elmt,i)=>{
                if(i == id){
                    return 1.5
                }
                return 1
            },
            translateX: bubbleSpin,
            duration:1000,
        })
    }
    const OnBubbleLeave = (id)=>{
        anime({
            targets:".cornerBubble",
            translateY: bubbleSpin*.5,
            borderColor: (elmt,i)=>{
                    return colorsDark[i]
            },
            rotate: (elmt,i)=>{
                return bubbleRotOffset+i*bubbleInterval
            },
            scale: (elmt,i)=>{
                return 1
            },
            translateX: bubbleSpin,
            duration:1000,
        })
    }
    const handleWheel= (event)=>{
        if (event.deltaY < 0)
        {
          if(!animCtrl_Transition.current){
            if(CurIndex.current-1>=0){
              TransitTo(CurIndex.current-1)
            }
          }
        }
        else if (event.deltaY > 0)
        {
          if(!animCtrl_Transition.current){
            if(CurIndex.current+1<blogList.current.length){
              TransitTo(CurIndex.current+1)
            }
          }
        }
      }
  useEventListener('wheel', handleWheel,window);
    //#endregion

    
    //#region Canvas 
    const ref_threeObj = useRef()
    const {width,height} = useWindowSize()
    const ref_camera = useRef()
    

    const targetRotation = useRef(0)
    const rotateToPi = useRef(false)
    const Rotate = ()=>{
        rotateToPi.current = !rotateToPi.current
        targetRotation.current = rotateToPi.current? Math.PI:0
        
    }   
    if(!PRODUCTION){
        const {foo} = useControls('cursor',{
            foo: button(() => {    
                Rotate()
                if(rotateToPi.current){
                    setColorDark("#ffaaba")
                    setColorLight("#ffcad4")
                }else{
                    setColorDark("#7caca2")
                    setColorLight("#b0d0d3")
                }
    
            }),
        })
    }


    
    useInterval(()=>{
        if(!ref_threeObj.current){
            return
        }
        if(Math.abs(ref_threeObj.current.rotation.z-targetRotation.current)<0.01){
            return
        }
        ref_threeObj.current.rotateZ(0.03*(Math.abs(targetRotation.current-ref_threeObj.current.rotation.z)))

    },15)
    const handleWindowMouseMove = e=>{
        if(!ref_camera.current){
            return
        }
        ref_camera.current.position.x = -(e.clientX/width-0.5)*3
        ref_camera.current.position.y = (e.clientY/height-0.5)*3
    }
    useEventListener('mousemove',handleWindowMouseMove,[])
//#endregion
    return (<>
        <div className='colorieBg' style={{backgroundColor: colorLight}}>
        <span className='homeDot' ref = {ref_ColorDot} />

        <div className='poster'>
        <div className='blog'>
        <div className='layout_1'>
        <div className='heading_1'>
        <div className='heading_title' >
        <h1 ref = {ref_Title}></h1>
        </div>
        <div className='heading_date' ref = {ref_Date}>
            <div className='date_line' ref = {ref_MonthDay}>
            </div>
            <div className='date_line' ref = {ref_Year}>
            </div>
        </div>
        </div>
        <div className='about_1'ref = {ref_About}>
        </div>
        </div>
        </div>
        </div>
        <div>
        </div>
        <div className='paletteShadow'>

        <div className='cornerPalette' style={{width: `${paletteRad*2}px`,height: `${paletteRad*2}px`,bottom:`${-bubbleSpin*.5-paletteRad }px`,left:`${-paletteRad }px`}} ref={ref_Palette}>
            <div className='txtPalette' >
            {/* READ */}
            </div>
        </div>
        </div>
        <div className='bubbles'>
        {[...Array(num_bubbles)].map((elmt,id)=>{return (<Colorie_Bubble key={id} id={id}  phaseAngle={bubbleRotOffset+id*bubbleInterval} spin={bubbleSpin} radius = {bubbleRad} onMouseEnter = {OnBubbleEnter} onMouseLeave = {OnBubbleLeave} onMouseClick={OnBubbleClick} ref={refs_bubbles[id]}/>)})}
        </div>


        <div className='threeCanvas'>

        <Canvas ref={ref_canvas} shadows flat dpr = {[1,2]} gl = {{
            toneMapping: ACESFilmicToneMapping,
            antialias:true, alpha:true}}   className ='canvas'  style={{pointerEvents:"none"}}>
            
        {/* <ambientLight intensity={0.5}/> */}
        <Environment blur={1} resolution={512}>
        <Lightformer
    form="circle" // circle | ring | rect (optional, default = rect)
    intensity={7} // power level (optional = 1)
    color="white" // (optional = white)
    scale={[1,1]} // Scale it any way you prefer (optional = [1, 1])
    target={[0, 0, 0]}
    position = {[-2, -1, 10]} // Target position (optional = undefined)
    />
    <Lightformer form="ring" color={colorLight} intensity={6} scale={9} position={[0, 4, 10]} target={[0, 0, 0]} />
    <Lightformer  form="circle" color="white" intensity={20} scale={5} position={[-8, 0, 10]} target={[0, 0, 0]} />

    </Environment>
        <PerspectiveCamera makeDefault position={[0, 0, 30]} zoom={height<width?0.8:0.8*width/height} ref={ref_camera} />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate ={false}  enableDamping makeDefault/>
        <group rotation={[Math.PI*0.5,Math.PI*0.25,0]} ref = {ref_threeObj} >
        <ColorieShowcase shadowColor = {colorDark} />
        </group>
        {!PRODUCTION? (<Perf position = 'bottom-right' />):null}
        </Canvas>
        </div>
        </div>

        </>)
}