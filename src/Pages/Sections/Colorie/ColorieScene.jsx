import { useRef,useEffect, useState, useContext, cloneElement, useImperativeHandle } from 'react';
import { Perf } from 'r3f-perf';
import { useEffectOnce, useEventListener, useInterval, useWindowSize } from 'usehooks-ts';
import { PerspectiveCamera,OrbitControls, Environment } from '@react-three/drei';
import Logger from '../../../Debug/Logger';
import { Lightformer } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';
import ModelInk from './ModelInk';
import settings from '../../../Settings'; 
import { forwardRef } from 'react';
import { useThree } from '@react-three/fiber';

const num_bubbles = 7
const bubbleInterval = Math.PI/3/(num_bubbles-3)
// const fakers = {bubbleRad: 30,bubbleSpin:300,paletteRad:250,angleOffset:0}
const colorsLight = settings.colorie.colorsLight
const colorsDark = settings.colorie.colorsDark


export default forwardRef(function ColorieScene(props,ref){
    Logger.Warn("Colorie Scene is rerendering")


    //#endregion

    
    //#region Canvas 
    const ref_threeObj = useRef()
    const {width,height} = useWindowSize()
    const {camera} = useThree()

    const targetRotation = useRef(0)
    const rotateToPi = useRef(false)
    const Rotate = ()=>{
        rotateToPi.current = !rotateToPi.current
        targetRotation.current = rotateToPi.current? Math.PI:0
    }   
    useImperativeHandle(
      ref,
      () => {
        return {Rotate(){
            Rotate()
        }
        }
      },
      []
    )
      useEffect(()=>{
        camera.zoom = height<width?0.8:0.8*width/height
      },[width,height])



    
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
        if(!camera){
            return
        }
        camera.position.x = -(e.clientX/width-0.5)*3
        camera.position.y = (e.clientY/height-0.5)*3
    }
    useEventListener('mousemove',handleWindowMouseMove,[])
//#endregion
    return (<>

<group rotation={[Math.PI*0.5,0,0]} ref = {ref_threeObj} >
            {cloneElement(props.model,{shadowColor: props.colorDark,colorLight:props.colorLight} )}
        </group>
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
        <PerspectiveCamera  position={[0, 0, 30]}  />
        <OrbitControls  enableDamping makeDefault/>

        {!PRODUCTION? (<Perf position = 'bottom-right' />):null}


        </>)
})