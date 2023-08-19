import {  useTexture } from '@react-three/drei';
import { useFBX,useGLTF } from '@react-three/drei';
import keyboard_Roughness from '../../assets/textures/board_Roughness.png'
import keyboard_Displace from '../../assets/textures/board_Displacement.png'
import keyboard_Base from '../../assets/textures/board_BaseColor.png'

export default function ColorieShowcase(){
    const model =  useGLTF('../../assets/model/keyboard.gltf')
    const txtr_keyboard_Base = useTexture(keyboard_Base)
    const txtr_keyboard_Roughness = useTexture(keyboard_Roughness)
    const txtr_keyboard_Displace = useTexture(keyboard_Displace)
    txtr_keyboard_Base.flipY = false
    txtr_keyboard_Displace.flipY = false
    txtr_keyboard_Roughness.flipY = false
    console.log(model)
    return  (<>
        <directionalLight intensity={1}position={[-20, 20, 0]}/>
        <pointLight intensity={0.7}position={[-5, 10,-5]} />
        <ambientLight intensity={0.3} />
        <mesh geometry={model.nodes.light1Outline.geometry} position={[0,0,0]} scale={1.5}>
        <meshBasicMaterial color={"#ba957b"} depthWrite={false} />
        </mesh>
        <mesh geometry={model.nodes.light1Outline.geometry} position={[0,0,0]} scale={1.2}>
        <meshBasicMaterial color={"#ffdab9"} depthWrite={false} />
        </mesh>


        <mesh geometry={model.nodes.board.geometry}  >
        <meshStandardMaterial toneMapped={false} map={txtr_keyboard_Base} roughnessMap={txtr_keyboard_Roughness} bumpMap={txtr_keyboard_Displace}/>
        </mesh>
        <mesh geometry={model.nodes.light1Outline.geometry}  >
        <meshBasicMaterial  color={'#111111'} />
        </mesh>
        </>)
}