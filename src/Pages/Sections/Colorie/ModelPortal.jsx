import { Sphere } from "@react-three/drei"
import { useFBX,useGLTF } from '@react-three/drei';
import { memo } from "react"
import { useCursor, MeshPortalMaterial, CameraControls, Gltf, Text } from '@react-three/drei'
import { useRef, useState } from "react"
import * as THREE from 'three'
import { extend, useFrame } from "@react-three/fiber"
import { geometry } from "maath"
import portal_Base from '../../../assets/textures/buildings_BaseColor.png'
import portal_Roughness from '../../../assets/textures/buildings_Roughness.png'
import { useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { Environment,Lightformer } from "@react-three/drei";
import { Sky } from "@react-three/drei";
extend(geometry)

function Frame({ id, name, author, bg,  children, ...props }) {
    return (
      <group {...props}>

      </group>
    )
  }




export default memo(function  ModelPortal(props){
    const {camera} = useThree()
    const buildings=  useGLTF('../../assets/model/buildings.gltf')
    const window=  useGLTF('../../assets/model/window.gltf')
    const portal =  useGLTF('../../assets/model/portal.gltf')
    const buildingOutline =  useGLTF('../../assets/model/buildingOutline.gltf')
    const windowOutline =  useGLTF('../../assets/model/windowOutline.gltf')
    const txtr_portal_Base = useTexture(portal_Base)
    const txtr_portal_Roughness = useTexture(portal_Roughness)
    txtr_portal_Base.flipY = false
    txtr_portal_Roughness.flipY = false
    
    return  (<>
        <mesh geometry={window.nodes.window.geometry} >
        <meshStandardMaterial map={txtr_portal_Base} roughnessMap={txtr_portal_Roughness}/>
        </mesh>
        <mesh geometry={portal.nodes.portal.geometry} >
        <meshStandardMaterial side={THREE.FrontSide}/>
        </mesh>
        <mesh geometry={windowOutline.nodes.windowOutline.geometry} >
        <meshBasicMaterial color={"#1e1e1e"}  />
        </mesh>
    <mesh geometry={portal.nodes.portal.geometry} >

          <MeshPortalMaterial   side={THREE.BackSide}>
            {/* <color attach="background" args={['#fefefe']} /> */}
            <Environment blur={1} resolution={512}>
        <Lightformer
        form="circle" // circle | ring | rect (optional, default = rect)
        intensity={7} // power level (optional = 1)
        color="white" // (optional = white)
        scale={[1,1]} // Scale it any way you prefer (optional = [1, 1])
        target={[0, 0, 0]}
        position = {[-2, -1, 10]} // Target position (optional = undefined)
        />
        <Lightformer form="ring" color={props.colorLight} intensity={6} scale={9} position={[0, 4, 10]} target={[0, 0, 0]} />
        <Lightformer  form="circle" color="white" intensity={10} scale={5} position={[-8, 0, 10]} target={[0, 0, 0]} />
        </Environment>
            <mesh geometry={buildings.nodes.buildings.geometry} >
            <meshStandardMaterial flatShading = {true} map={txtr_portal_Base} roughnessMap={txtr_portal_Roughness}/>
        </mesh>
        <mesh geometry={buildingOutline.nodes.buildingOutline.geometry} >
        <meshBasicMaterial color={"#1e1e1e"}  />
        </mesh>
        <Sky sunPosition={[0.5, 0.5, 0]} inclination={1} azimuth={0} />
          </MeshPortalMaterial>
        </mesh>



        </>)
})