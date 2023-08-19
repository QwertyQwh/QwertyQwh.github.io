import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { ACESFilmicToneMapping,LinearToneMapping,CineonToneMapping,ReinhardToneMapping,NoToneMapping } from 'three';
import { Perf } from 'r3f-perf';
import ColorieShowcase from './ColorieShowcase';
import { OrbitControls } from '@react-three/drei';
import anime from 'animejs';
import { useEffectOnce } from 'usehooks-ts';
import { useControls,button } from 'leva';
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

    const {foo} = useControls('cursor',{
        foo: button(() => {    
            ref_showcase.current.Rotate()}),
    })

    return (<>
        <div className='colorieBg'>
        <div className='poster'>
        <div className='blog'>
        <div className='layout_1'>
        <div className='heading_1'>
        <div className='heading_title'>
        <h1>中文and English混杂在一起</h1>
        </div>
        <div className='date'>
        March 11, 2023
        </div>
        </div>
        <div className='heading_date'>
        Aug 25,  2023
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
        <div >

        <Canvas ref={ref_canvas} shadows flat dpr = {[1,2]} gl = {{
            toneMapping: NoToneMapping,
            antialias:true, alpha:true}} className ='canvas'  >
            
        
        <ColorieShowcase ref = {ref_showcase}/>
        <Perf position = 'bottom-right' />
        </Canvas>
        </div>

        </div>
        </>)
}