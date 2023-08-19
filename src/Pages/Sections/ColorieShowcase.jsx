import {  useTexture,OrthographicCamera,PerspectiveCamera,OrbitControls } from '@react-three/drei';
import { useFBX,useGLTF } from '@react-three/drei';
import { forwardRef, useImperativeHandle } from 'react';
import keyboard_Roughness from '../../assets/textures/board_Roughness.png'
import keyboard_Displace from '../../assets/textures/board_Displacement.png'
import keyboard_Base from '../../assets/textures/board_BaseColor.png'
import keyboard_Emission from '../../assets/textures/board_Emission.png'
import { useEffectOnce, useEventListener, useInterval, useWindowSize } from 'usehooks-ts';
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
    const showcase_ref = useRef()
    const {width,height} = useWindowSize()
    const ref_camera = useRef()
    const handleWindowMouseMove = e=>{
         ref_camera.current.position.x = -(e.clientX/width-0.5)*3
         ref_camera.current.position.y = (e.clientY/height-0.5)*3
    }
    const targetRotation = useRef(0)
    const rotateToPi = useRef(false)
    useEventListener('mousemove',handleWindowMouseMove,[])
    useImperativeHandle(
      ref,() => {
        return{
            Rotate(){
                rotateToPi.current = !rotateToPi.current
                targetRotation.current = rotateToPi.current? Math.PI:0
                
            }   
        }
      },
      [],
    )
    useInterval(()=>{

        if(Math.abs(showcase_ref.current.rotation.z-targetRotation.current)<0.01){
            return
        }
        showcase_ref.current.rotateZ(0.03*(Math.abs(targetRotation.current-showcase_ref.current.rotation.z)))

    },15)
    console.log(model)
    return  (<>
        <directionalLight  intensity={1.5}position={[-10, 0, 10]}/>
        <pointLight intensity={0.8}position={[-5, -5,10]} />
        <pointLight intensity={0.3}position={[-5, -5,-10]} />
        <ambientLight intensity={0.5}/>
        <PerspectiveCamera makeDefault position={[0, 0, 30]} zoom={0.8} ref={ref_camera} />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate ={false}  enableDamping makeDefault/>


        <group rotation={[Math.PI*0.5,Math.PI*0.25,0]} ref = {showcase_ref} >
            
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
        </group>

        </>)
})