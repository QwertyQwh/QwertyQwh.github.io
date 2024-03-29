import * as THREE from 'three'
import { Canvas ,useThree,useFrame} from "@react-three/fiber"
import { useRef,useState,useEffect,Suspense } from 'react'
import { useControls,button } from 'leva'
import { Vector3 } from 'three'
import Post from '../../../post/Post.jsx'
import Loader from '../../../UI/BikeLoader.jsx'
import { useEffectOnce } from 'usehooks-ts'
import Stage from '../../../Scene_Legacy/Stage.jsx'
import { OrbitControls } from '@react-three/drei'
import Camera from '../../../Scene_Legacy/Camera.jsx'
import Palette from '../../../Catalogs/Palette.js'

export default function Test(props){
return <>
            <color attach="background" args={[Palette.get_random_color_from_palette()]} />
          {/* <OrbitControls makeDefault/> */}
          <Camera targetPos={new Vector3(-5,5,0)} />
          <Stage />
        {/* <Post blur = {blur}/> */}
</>
}