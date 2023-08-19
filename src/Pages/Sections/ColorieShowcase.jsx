import {  useTexture,OrthographicCamera,PerspectiveCamera,OrbitControls } from '@react-three/drei';
import { useFBX,useGLTF } from '@react-three/drei';
import { memo } from 'react';
import { forwardRef, useImperativeHandle,useEffect } from 'react';
import keyboard_Roughness from '../../assets/textures/board_Roughness.png'
import keyboard_Displace from '../../assets/textures/board_Displacement.png'
import keyboard_Base from '../../assets/textures/board_BaseColor.png'
import keyboard_Emission from '../../assets/textures/board_Emission.png'
import keyboard_Normal from '../../assets/textures/board_Normal.png'
import { useRef } from 'react';
import { EffectComposer,Bloom } from '@react-three/postprocessing';
import Logger from '../../Debug/Logger';
export default memo(function  ColorieShowcase(props){
    Logger.Warn('ColorieShowcase is rerendering')
    const model =  useGLTF('../../assets/model/keyboard.gltf')
    const txtr_keyboard_Base = useTexture(keyboard_Base)
    const txtr_keyboard_Roughness = useTexture(keyboard_Roughness)
    const txtr_keyboard_Displace = useTexture(keyboard_Displace)
    const txtr_keyboard_Emission = useTexture(keyboard_Emission)
    const txtr_keyboard_Normal = useTexture(keyboard_Normal)
    txtr_keyboard_Base.flipY = false
    txtr_keyboard_Displace.flipY = false
    txtr_keyboard_Roughness.flipY = false
    txtr_keyboard_Emission.flipY = false
    txtr_keyboard_Normal.flipY = false



    return  (<>

        {/* <mesh geometry={model.nodes.outline.geometry} position={[0,0,0]} scale={1.6}>
        <meshBasicMaterial color={"#ba957b"} depthWrite={false} />
        </mesh> */}
        <mesh geometry={model.nodes.outline.geometry} position={[0,0,0]} scale={1.5}>
        <meshBasicMaterial color={props.shadowColor} depthWrite={false} />
        </mesh>
        <mesh geometry={model.nodes.board.geometry}  >
        <meshStandardMaterial flatShading = {false} map={txtr_keyboard_Base} roughnessMap={txtr_keyboard_Roughness} bumpMap={txtr_keyboard_Displace} emissive={'#ffffff'} emissiveIntensity={1} emissiveMap={txtr_keyboard_Emission} normalMap={txtr_keyboard_Normal}/>
        </mesh>
        <mesh geometry={model.nodes.outline.geometry} >
        <meshBasicMaterial  color={'#111111'} />
        </mesh>


        </>)
})