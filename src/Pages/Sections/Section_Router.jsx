import { useRef, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Section_Colorie from './Colorie/Section_Colorie';

export default function Section_Router(props){
    const data = useLoaderData()
    console.log(data)
    //So that we can switch section theme in the future
    switch (data.name) {
        case 'coding':
            return <Section_Colorie {...data} />
            break;
        case 'writing':
            return <Section_Colorie {...data} />
            break;   
        case 'art':
            return <Section_Colorie {...data}/>
            break;
        default:
            
            break;
    }
    return null
}