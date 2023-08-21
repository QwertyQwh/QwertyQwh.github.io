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
import { CursorContext, DeviceContext,TransitionCircleContext } from '../../../Contexts/Contexts';
import Colorie_Bubble from './Colorie_Bubble';
import { Color } from 'three';
import BlogCatalog from '../../../Catalogs/BlogCatalog';
import { Number2Month, proper_modulo } from '../../../Utils/Utils';
import { useNavigate } from 'react-router-dom';
import Svg_Home from '../../../assets/svg/home.svg'

const num_bubbles = 7
const bubbleInterval = Math.PI/3/(num_bubbles-3)
// const fakers = {bubbleRad: 30,bubbleSpin:300,paletteRad:250,angleOffset:0}
const colorsLight = ["#b0d0d3","#ffcad4","#bfd6dd","#ffe5d9","#e0d9fc","#cad6ea","#fef9c2"]
const colorsDark = ["#7caca2","#ffaaba","#80a8b7","#ffd2c0","#c0b1fc","#a3bfe8","#fcf1a4"]



export default function Section_Colorie(props){
    Logger.Warn("Colorie is rerendering")
    const blogList = useRef([])
    const ref_canvas = useRef()
    const ref_Palette = useRef()
    const ref_Read = useRef()
    const ref_ColorDotBottom = useRef()
    const ref_ColorDotTop = useRef()
    const ref_Title = useRef()
    const ref_About = useRef()
    const ref_Date = useRef()
    const ref_MonthDay = useRef()
    const ref_Year = useRef()
    const ref_Home = useRef()
    const device = useContext(DeviceContext)
    const cursor = useContext(CursorContext)
    const navigate = useNavigate()
  const transitionCircle = useContext(TransitionCircleContext)

    const animCtrl_Transition = useRef(false)

    const [bubbleRotOffset, setbubbleRotOffset] = useState(-Math.PI/3);
    const curPage = useRef(0)
    const [paletteRad, setpaletteRad] = useState(250);
    const [bubbleSpin, setbubbleSpin] = useState(300);
    const [bubbleRad, setbubbleRad] = useState(30);
    const [colorDark, setColorDark] = useState("#7caca2");
    const [colorLight, setColorLight] = useState("#b0d0d3");
    const refs_bubbles = [...Array(num_bubbles)].map(()=>useRef())

    const IndexToRotation = (id)=>{
        //special condition here
        if(curPage.current<3){
            return  bubbleRotOffset+bubbleInterval*id-curPage.current*bubbleInterval
        }
        const offsetInterval = proper_modulo(3-id+curPage.current,num_bubbles)
        const targetRot = bubbleRotOffset+3*bubbleInterval -bubbleInterval*offsetInterval
        return targetRot-Math.floor((3-id+curPage.current)/7)*Math.PI*2
    }

    const IndexToPage = (id)=>{
        if(curPage.current<3){
            return  id
        }
        return id+Math.floor((3-id+curPage.current)/7)*7;
    }
    const OrdinalCurIndex = (id)=>{
        const offseted=  proper_modulo(id-curPage.current,num_bubbles)
        if(offseted == 0){
            return 0
        }else if(offseted <=3){
            return offseted
        }else 
        {
            return offseted-7
        }
    }

    const OrdinalTargetIndex = (id,target)=>{
        const offseted=  proper_modulo(id-target,num_bubbles)
        if(offseted == 0){
            return 0
        }else if(offseted <=3){
            return offseted
        }else 
        {
            return offseted-7
        }
    }
    const OrdinalTarget = (id, targetId)=>{
        const ordinalSelf = OrdinalCurIndex(id)
        const oridnalTarget = OrdinalCurIndex(targetId)
        return ordinalSelf-oridnalTarget
    }

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
        ref_Title.current.textContent = blogList.current[curPage.current][1].title
        ref_About.current.textContent = blogList.current[curPage.current][1].about
        const date = blogList.current[curPage.current][1].date
        ref_MonthDay.current.textContent = `${Number2Month(date.month)}  ${date.day}`
        ref_Year.current.textContent =  date.year
        refs_bubbles.forEach((elmt,id)=>{ refs_bubbles[id].current.SetContent(IndexToPage(id)<blogList.current.length? blogList.current[IndexToPage(id)][1]:null,id)})
        refs_bubbles.forEach((elmt,order)=>refs_bubbles[order].current.SetRot(IndexToRotation(order),curPage.current%num_bubbles,OrdinalCurIndex(order),0,OrdinalCurIndex(order) ))
   

    })
    const animReadSwell = useRef()
    const PlayReadSwell = ()=>{
        cursor.Focus.current()
        console.log('entering')
        animReadSwell.current ??= anime({
            targets: ref_Read.current,
            scale:[1,1.5],
            duration:600,
            complete:()=>[
                animReadSwell.current = null
            ]
        })
    }
    const animReadShrink = useRef()

    const PlayReadShrink = ()=>{
        cursor.DeFocus.current()

        console.log('leaving')
        animReadShrink.current ??= anime({
            targets: ref_Read.current,
            scale:[1.5,1],
            duration:600,
            complete:()=>[
                animReadShrink.current = null
            ]
        })
    }

    const  OnReadClick = ()=>{
        const x = '90%'
        const y = '10%'
        transitionCircle.PlayTransition.current({x:x,y:y},colorsDark[curPage.current%num_bubbles],()=>navigate(`../blogs/${blogList.current[curPage.current%num_bubbles][0]}/`))
        cursor.DeFocus.current()
        
    } 


    const ColorSwell = ({x,y},color,callback) =>{
        ref_ColorDotBottom.current.style.top = y
        ref_ColorDotBottom.current.style.left = x
        ref_ColorDotTop.current.style.bottom = y
        ref_ColorDotTop.current.style.right = x
        ref_ColorDotBottom.current.style.backgroundColor = color
        ref_ColorDotTop.current.style.backgroundColor = color
        anime.timeline().add({
          targets: [ref_ColorDotBottom.current,ref_ColorDotTop.current],
          scale: [0,150],
          duration:800,
          easing: 'easeInQuad',
          complete: ()=>{callback()},
        })
    }

    const OnHomeEnter = ()=>{
        cursor.Focus.current()
    }

    const OnHomeLeave = ()=>{
        cursor.DeFocus.current()
    }
    const OnHomeClick = ()=>{
        const x = '0%'
        const y = '0%'
        transitionCircle.PlayTransition.current({x:x,y:y},"#fefefe",()=>navigate(`../home`))
        cursor.DeFocus.current()

    }

//#region BubbleEvents
    const TransitTo= (page)=>{
        const direction = page-curPage.current
        if(animCtrl_Transition.current){
            return
        }
        animCtrl_Transition.current = true
        Rotate()
        ColorSwell({x:'10%',y:'100%'},colorsLight[page%num_bubbles],()=>{setColorLight(colorsLight[page%num_bubbles]);   setColorDark(colorsDark[page%num_bubbles]); })
        anime.timeline().add({
            targets:ref_Title.current,
            translateY: [0,-100],
            opacity:[1,0],
            easing: 'easeInSine',
            duration:600,
            complete:()=>{
                ref_Title.current.textContent = blogList.current[page%num_bubbles][1].title
            }
        }).add({
            targets:ref_About.current,
            translateY: [0,-100],
            opacity:[1,0],
            easing: 'easeInSine',
            duration:600,
            complete:()=>{
                ref_About.current.textContent = blogList.current[page%num_bubbles][1].about
            }
        },"-=400").add({
            targets:ref_Date.current,
            translateY: [0,-100],
            opacity:[1,0],
            easing: 'easeInSine',
            duration:600,
            complete:()=>{
                const date = blogList.current[page%num_bubbles][1].date
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
        ref_Palette.current.style.backgroundColor = colorsDark[page%num_bubbles]
        ref_Read.current.style.backgroundColor = colorsDark[page%num_bubbles]
        anime({
            targets: [ref_Palette.current,ref_Read.current],
            scale:[0,1],
            duration:800
        })


        const prev= curPage.current
        curPage.current = page

        refs_bubbles.forEach((elmt,order)=>{
            console.log(IndexToPage(order));
            refs_bubbles[order].current.SetContent( IndexToPage(order)<blogList.current.length? blogList.current[IndexToPage(order)][1]:null,IndexToPage(order))
        })

        refs_bubbles.forEach((elmt,order)=>refs_bubbles[order].current.SetRot(IndexToRotation(order),curPage.current%num_bubbles,OrdinalCurIndex(order),direction,OrdinalTargetIndex(order,prev) ))



    }

    const OnBubbleClick = (id) =>{
        const page = refs_bubbles[id].current.GetPage()

        TransitTo(page)
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
                if(curPage.current%num_bubbles == id){
                    //The hovered bubble is the featured bubble

                }
                const ordinal = OrdinalTarget(i,id)
                if(ordinal == 0){
                    return IndexToRotation(i)
                }
                if(ordinal>0){
                    return IndexToRotation(i)+0.05
                }
                return IndexToRotation(i)-0.05
            },
            scale: (elmt,i)=>{
                if(i == id){
                    return 1.4
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
                const rot=  IndexToRotation(i)
                const ordinal = OrdinalCurIndex(i)
                if(ordinal == 0){
                    return rot
                }
                if(ordinal >0){
                    return rot+0.05
                }
                return rot-0.05
            },
            scale: (elmt,i)=>{
                return curPage.current%num_bubbles == i?1.4:1
            },
            translateX: bubbleSpin,
            duration:1000,
        })
    }
    const handleWheel= (event)=>{
        if (event.deltaY < 0)
        {
          if(!animCtrl_Transition.current){
            if(curPage.current-1>=0){
              TransitTo(curPage.current-1)
            }
          }
        }
        else if (event.deltaY > 0)
        {
          if(!animCtrl_Transition.current){
            if(curPage.current+1<blogList.current.length){
              TransitTo(curPage.current+1)
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
        // const {foo} = useControls('cursor',{
        //     foo: button(() => {    
        //         Rotate()
        //         if(rotateToPi.current){
        //             setColorDark("#ffaaba")
        //             setColorLight("#ffcad4")
        //         }else{
        //             setColorDark("#7caca2")
        //             setColorLight("#b0d0d3")
        //         }
    
        //     }),
        // })
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

        <span className='homeDot' ref = {ref_ColorDotBottom} />
        <span className='homeDot' ref = {ref_ColorDotTop} />
        <button ref = {ref_Home} onMouseOver={OnHomeEnter} onMouseOut={OnHomeLeave} onClick={OnHomeClick} >
            <div style={{transform:'scale(0.3)',display:'inline'}}>
             <Svg_Home />
            </div>
</button>
        <div className='header'>
        </div>
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
        <div className='cornerPalette' style={{width: `${paletteRad*2}px`,height: `${paletteRad*2}px`,bottom:`${-bubbleSpin*.5-paletteRad }px`,left:`${-paletteRad }px`}} ref={ref_Palette}>
            <div className='txtPalette' >
            {/* READ */}
            </div>
        </div>
        <div className='cornerPalette' style={{width: `${paletteRad*2}px`,height: `${paletteRad*2}px`,top:`${-bubbleSpin*.5-paletteRad }px`,right:`${-paletteRad }px`}} ref = {ref_Read}  onMouseOver={PlayReadSwell} onMouseOut={PlayReadShrink} onClick={OnReadClick}>
            <div className='txtPalette'  >
            READ
            </div>
        </div>
        </div>

        </>)
}