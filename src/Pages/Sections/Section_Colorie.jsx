import { useRef,useEffect, useState, useContext } from 'react';
import { Canvas } from '@react-three/fiber';
import { ACESFilmicToneMapping,LinearToneMapping,CineonToneMapping,ReinhardToneMapping,NoToneMapping } from 'three';
import { Perf } from 'r3f-perf';
import ColorieShowcase from './ColorieShowcase';
import anime from 'animejs';
import { useControls,button } from 'leva';
import { useEffectOnce, useEventListener, useInterval, useWindowSize } from 'usehooks-ts';
import { PerspectiveCamera,OrbitControls, Environment } from '@react-three/drei';
import Logger from '../../Debug/Logger';
import { Lightformer } from '@react-three/drei';
import { DeviceContext } from '../../Contexts/Contexts';

export default function Section_Colorie(props){
    Logger.Warn("Colorie is rerendering")
    const ref_canvas = useRef()
    const ref_showcase = useRef()
    const device = useContext(DeviceContext)
    const [colorDark, setColorDark] = useState("#7caca2");
    const [colorLight, setColorLight] = useState("#b0d0d3");
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
    })
    useEffect(()=>{

    },[colorDark])

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
    if(PRODUCTION){
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
        <div className='poster'>
        <div className='blog'>
        <div className='layout_1'>
        <div className='heading_1'>
        <div className='heading_title'>
        <h1>中文and English混杂在一起</h1>
        </div>
        <div className='heading_date'>
            <div className='date_line'>
                 August 25 
            </div>
            <div className='date_line'>
                2023
            </div>
        </div>
        </div>
        <div className='about_1'>
        This is a bunch of description. 这是一段简介.这是一段很长的简介。这是一段很长的简介。这是一段很长的简介这是一段很长的简介这是一段很长的简介。
        </div>
        </div>
        </div>
        </div>
        <div>
        </div>
        <div className='paletteShadow'>

        <div className='cornerPalette'>
            <div className='txtPalette' >
            {/* READ */}
            </div>
        </div>
        </div>
        <div className= 'cornerBubble'>
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