import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap';
const MAXIMUN_COUNT = 10;

export const CounterEfect = () => {

  const [counter, setCounter] = useState(5);

  const handleClick = () => {
    if(counter<MAXIMUN_COUNT){  
      setCounter(prev=>prev+1)
    }
  }
  const counterElement= useRef<HTMLHeadingElement>(null);
  useEffect( ()=>{
   // if (counter <10 ) return;
    console.log('%cSe llego al valor maximo','color:red;')
    const tl= gsap.timeline();
    tl.to(counterElement.current,{y:-10,duration:0.2, ease:'ease.out'})
    tl.to(counterElement.current,{y:0,duration:1, ease:'bounce.out'})

  },[counter]);


  return (
    <>
    <h1>Counter Effect</h1>
    <h2 ref= {counterElement}>counter: {counter}</h2>
    <button onClick={handleClick}>
    +1
    </button>
    </>
  )
}
