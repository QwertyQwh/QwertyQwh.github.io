import {  useTexture,OrthographicCamera,PerspectiveCamera,OrbitControls } from '@react-three/drei';
import { useFBX,useGLTF } from '@react-three/drei';
import { memo } from 'react';
import { forwardRef, useImperativeHandle,useEffect } from 'react';
import keyboard_Roughness from '../../../assets/textures/cap_Roughness.png'
import keyboard_Displace from '../../../assets/textures/cap_Displacement.png'
import keyboard_Base from '../../../assets/textures/cap_BaseColor.png'
import keyboard_Normal from '../../../assets/textures/cap_Normal.png'
import keyboard_Metal from '../../../assets/textures/cap_Metallic.png'
import { useRef } from 'react';
import { EffectComposer,Bloom } from '@react-three/postprocessing';
import Logger from '../../../Debug/Logger';
export default memo(function  ModelInk(props){
    Logger.Warn('Ink is rerendering')
    const model =  useGLTF('../../assets/model/ink.gltf')
    const txtr_keyboard_Base = useTexture(keyboard_Base)
    const txtr_keyboard_Roughness = useTexture(keyboard_Roughness)
    const txtr_keyboard_Displace = useTexture(keyboard_Displace)
    const txtr_keyboard_Normal = useTexture(keyboard_Normal)
    const txtr_keyboard_Metal = useTexture(keyboard_Metal)
    txtr_keyboard_Base.flipY = false
    txtr_keyboard_Displace.flipY = false
    txtr_keyboard_Roughness.flipY = false
    txtr_keyboard_Normal.flipY = false
    txtr_keyboard_Metal.flipY = false



    return  (<>

        {/* <mesh geometry={model.nodes.outline.geometry} position={[0,0,0]} scale={1.6}>
        <meshBasicMaterial color={"#ba957b"} depthWrite={false} />
        </mesh> */}
        <mesh geometry={model.nodes.outline.geometry} position={[0,-2,0]} scale={4}>
        <meshBasicMaterial color={props.shadowColor} depthWrite={false} />
        </mesh>
        <mesh geometry={model.nodes.bottle.geometry} position={[0,-2,0]}  scale={3}>
        <meshStandardMaterial flatShading = {true} map={txtr_keyboard_Base} roughnessMap={txtr_keyboard_Roughness} bumpMap={txtr_keyboard_Displace}  />
        </mesh>
        <mesh geometry={model.nodes.outline.geometry} position={[0,-2,0]}  scale={3}>
        <meshBasicMaterial  color={'#111111'} />
        </mesh>


        </>)
})