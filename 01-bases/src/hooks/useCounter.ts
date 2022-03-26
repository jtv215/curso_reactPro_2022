import { useEffect,useLayoutEffect, useRef, useState } from "react";
import { gsap } from 'gsap';

const MAXIMUN_COUNT=10;

export const useCounter= ({maxCount=10})=>{

    const [counter, setCounter] = useState(5);
    const counterElement= useRef<HTMLHeadingElement>(null);
    
    const tl= useRef(gsap.timeline());

    const handleClick = () => {
      if(counter<maxCount){  setCounter(prev=>prev+1) }
    }

    useLayoutEffect(()=>{
     
   
        tl.current.to(counterElement.current,{y:-10,duration:0.2, ease:'ease.out'})
                .to(counterElement.current,{y:0,duration:1, ease:'bounce.out'})
   
    },[]);
/*
    useEffect(()=>
    {
        if (counter <10 ) return;
        console.log('%cSe llego al valor maximo','color:red;')

        tl.current.to(counterElement.current,{y:-10,duration:0.2, ease:'ease.out'})
                .to(counterElement.current,{y:0,duration:1, ease:'bounce.out'})
  
    },[counter]);*/
  
  
  
  
    return {
        counter,
        counterElement,
        handleClick,     
    }
}