import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { ACESFilmicToneMapping,LinearToneMapping,CineonToneMapping,ReinhardToneMapping,NoToneMapping } from 'three';
import { Perf } from 'r3f-perf';
import ColorieShowcase from './ColorieShowcase';
import { OrbitControls } from '@react-three/drei';
import { Environment } from '@react-three/drei';
import hdr_Studio from '../../assets/textures/hdr/poly_haven_studio_1k.hdr'
export default function Section_Colorie(props){
  
    return (<>
        <div className='colorieBg'>
        <div className='poster'>
        <div className='blog'>
        <div className='layout_1'>
        <div className='heading_1'>
        <div className='heading_title'>
        <h1>中文and English混杂在一起</h1>
        </div>
        <div className='desc'>
        The article has a description here, which is described by those texts.
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
        <Canvas  shadows flat dpr = {[1,2]} gl = {{
            toneMapping: ACESFilmicToneMapping,
            antialias:true, alpha:true}} className ='canvas'  >
        <PerspectiveCamera makeDefault position={[-15, 25, 15]}/>

        <OrbitControls makeDefault/>
        
        <ColorieShowcase />
        <Perf position = 'bottom-right' />
        </Canvas>
        </div>
        </>)
}