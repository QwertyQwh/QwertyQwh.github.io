import { useContext, useEffect, useRef } from "react"
import { useLoaderData, useNavigate } from "react-router-dom"
import { useEventListener, useEffectOnce, useWindowSize } from "usehooks-ts"
import Svg_Arrow from '../../assets/svg/blog_arrow.svg'
import Svg_Pin from '../../assets/svg/blog_pin.svg'
import { Number2Month } from "../../Utils/Utils"
import { CursorContext, TransitionCircleContext } from "../../Contexts/Contexts"


export default function Blog(){
    const data =useLoaderData()
    if(data.external){
        window.location.assign(data.url)
    }
    const navigate = useNavigate()
    //smooth scrolling
    const ref_post = useRef()
    const ref_cntntPost = useRef()
    const ref_Bg = useRef()
    const ref_BtnHome = useRef()
    const ref_BtnSection = useRef()
    const {width,height} = useWindowSize()
    const transitionCircle = useContext(TransitionCircleContext)
    const cursor = useContext(CursorContext)
    useEffect(()=>{
        document.querySelectorAll('.blogBg .titleBlock img').forEach((elmt,id)=>{
            console.log(elmt)
            elmt.style.maxWidth = `${(ref_cntntPost.current.clientWidth-1.5*5)*0.8}px`
        })
    },[width,height])
    
    const OnBtnHomeClicked = ()=>{
        const rect = ref_BtnHome.current.getBoundingClientRect()
        transitionCircle.PlayTransition.current({y:`${(rect.top+rect.bottom)/2}px`,x:`${(rect.left+rect.right)/2}px`},"#EADCC2",()=> navigate(`../../home`))
        cursor.DeFocus.current()
    }
    const OnBtnSectionClicked = ()=>{
        const rect = ref_BtnSection.current.getBoundingClientRect()
        transitionCircle.PlayTransition.current({y:`${(rect.top+rect.bottom)/2}px`,x:`${(rect.left+rect.right)/2}px`},"#EADCC2",()=> navigate(`../../section/${data.sectionId}`))
        cursor.DeFocus.current()
    }
    const OnBtnHomeOver = ()=>{
        cursor.Focus.current()
    }
    const OnBtnSectionOver = ()=>{
        cursor.Focus.current()
    }
    const OnBtnHomeLeave = ()=>{
        cursor.DeFocus.current()
    }
    const OnBtnSectionLeave = ()=>{
        cursor.DeFocus.current()
    }
    return (
        <div className="blogBg" ref = {ref_Bg}>
        <div className="header">
        <div className='homeBtns'>
        <button className = 'home' onClick={OnBtnHomeClicked} onMouseOver={OnBtnHomeOver} onMouseLeave={OnBtnHomeLeave}>
        <span className="button_top" ref = {ref_BtnHome}> Home
        </span>
        </button>
        <div style={{display:"inline-block",width:40,margin:"0 0.5em",top: '.6em',position:'relative'}}>
        <Svg_Arrow /> 
        </div>
        <button className = 'home' onClick={OnBtnSectionClicked} onMouseOver={OnBtnSectionOver} onMouseLeave={OnBtnSectionLeave}>
        <span className="button_top" ref = {ref_BtnSection}> {data.sectionId}
        </span>
        </button>
        </div>
        </div>
        <div className="post" ref = {ref_post}>
        <div className = "titleBlockContainer">
        <div className = "titleBlockBuffer">
        <div className = 'titleBlockShadow'>
        <div className = 'titleBlock' ref = {ref_cntntPost}>
        <span style={{display:"inline-block",width:30,transform: 'translateY(-2em) translateX(-1.5em)'}}>
        <Svg_Pin />
        </span>
        <time className="postDate"> {`${Number2Month(data.date.month)}  ${data.date.day}, ${data.date.year}`}</time>
        <h1 className="title">
        {data.title}
        </h1>
        </div>
        </div>
        </div>
        </div>
        <div className = "titleBlockContainer">
        <div className = "titleBlockBuffer">
        <div className = 'titleBlockShadow'>
        <div className = 'titleBlock'>
        {data.content}
        </div>
        </div>
        </div>
        </div>

        </div>
        

        </div>
    )
}