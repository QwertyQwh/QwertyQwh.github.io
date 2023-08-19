import {  useTexture,OrthographicCamera,PerspectiveCamera,OrbitControls } from '@react-three/drei';
import { useFBX,useGLTF } from '@react-three/drei';
import { forwardRef, useImperativeHandle,useEffect } from 'react';
import keyboard_Roughness from '../../assets/textures/board_Roughness.png'
import keyboard_Displace from '../../assets/textures/board_Displacement.png'
import keyboard_Base from '../../assets/textures/board_BaseColor.png'
import keyboard_Emission from '../../assets/textures/board_Emission.png'
import { useRef } from 'react';
import { EffectComposer,Bloom } from '@react-three/postprocessing';
export default forwardRef(function  ColorieShowcase(props,ref){
    const model =  useGLTF('../../assets/model/keyboard.gltf')
    const txtr_keyboard_Base = useTexture(keyboard_Base)
    const txtr_keyboard_Roughness = useTexture(keyboard_Roughness)
    const txtr_keyboard_Displace = useTexture(keyboard_Displace)
    const txtr_keyboard_Emission = useTexture(keyboard_Emission)
    txtr_keyboard_Base.flipY = false
    txtr_keyboard_Displace.flipY = false
    txtr_keyboard_Roughness.flipY = false
    txtr_keyboard_Emission.flipY = false



    return  (<>

        {/* <mesh geometry={model.nodes.outline.geometry} position={[0,0,0]} scale={1.6}>
        <meshBasicMaterial color={"#ba957b"} depthWrite={false} />
        </mesh> */}
        <mesh geometry={model.nodes.outline.geometry} position={[0,0,0]} scale={1.3}>
        <meshBasicMaterial color={"#7caca2"} depthWrite={false} />
        </mesh>
        <mesh geometry={model.nodes.board.geometry}  >
        <meshStandardMaterial flatShading = {true} map={txtr_keyboard_Base} roughnessMap={txtr_keyboard_Roughness} bumpMap={txtr_keyboard_Displace} emissive={'#ffffff'} emissiveIntensity={1} emissiveMap={txtr_keyboard_Emission}/>
        </mesh>
        <mesh geometry={model.nodes.outline.geometry} >
        <meshBasicMaterial  color={'#111111'} />
        </mesh>


        </>)
})