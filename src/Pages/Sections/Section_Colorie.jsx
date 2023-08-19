import { useRef,useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { ACESFilmicToneMapping,LinearToneMapping,CineonToneMapping,ReinhardToneMapping,NoToneMapping } from 'three';
import { Perf } from 'r3f-perf';
import ColorieShowcase from './ColorieShowcase';
import anime from 'animejs';
import { useControls,button } from 'leva';
import { useEffectOnce, useEventListener, useInterval, useWindowSize } from 'usehooks-ts';
import { PerspectiveCamera,OrbitControls } from '@react-three/drei';

export default function Section_Colorie(props){
    const ref_canvas = useRef()
    const ref_showcase = useRef()
    useEffectOnce(()=>{
        console.log(ref_canvas.current)
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


    //Canvas Section
    const ref_threeObj = useRef()
    const {width,height} = useWindowSize()
    const ref_camera = useRef()

    const targetRotation = useRef(0)
    const rotateToPi = useRef(false)
    const Rotate = ()=>{
        rotateToPi.current = !rotateToPi.current
        targetRotation.current = rotateToPi.current? Math.PI:0
        
    }   
    const {foo} = useControls('cursor',{
        foo: button(() => {    
            Rotate()}),
    })
    useEffect(() => {
        if(height>width){
            ref_camera.current.zoom = 0.8*width/height
        }
    }, [width,height]);
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

    return (<>
        <div className='colorieBg'>
        <div className='poster'>
        <div className='blog'>
        <div className='layout_1'>
        <div className='heading_1'>
        <div className='heading_title'>
        <h1>中文and English混杂在一起</h1>
        </div>
        <div className='heading_date'>
        Aug 25,  2023
        </div>
        </div>

        <div className='about_1'>
        This is a bunch of description. 这是一段简介
        </div>
        </div>
 
        </div>
        </div>
        <div>

        </div>
        <div className='cornerPalette'>
        </div>
        <div className= 'cornerBubble'>
        </div>
        <div className='threeCanvas'>

        <Canvas ref={ref_canvas} shadows flat dpr = {[1,2]} gl = {{
            toneMapping: NoToneMapping,
            antialias:true, alpha:true}} className ='canvas'  >
                    <directionalLight  intensity={1.5}position={[-10, 0, 10]}/>
        <pointLight intensity={0.8}position={[-5, -5,10]} />
        <pointLight intensity={0.3}position={[-5, -5,-10]} />
        <ambientLight intensity={0.5}/>
        <PerspectiveCamera makeDefault position={[0, 0, 30]} zoom={0.8} ref={ref_camera} />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate ={false}  enableDamping makeDefault/>
        <group rotation={[Math.PI*0.5,Math.PI*0.25,0]} ref = {ref_threeObj} >
        <ColorieShowcase />
        </group>
        <Perf position = 'bottom-right' />
        </Canvas>
        </div>

        </div>
        </>)
}