import React, { useReducer, useState } from 'react'
import { act } from 'react-dom/test-utils';
import { json } from 'stream/consumers';

export const CounterReducerCompenent = () => {

  const INITIAL_STATE:CounterState = {
    counter:20,
    previous:10,
    changes:2
  }  

  interface CounterState{
    counter:number,
    previous:number,
    changes:number,
  }

  type CounterAction = 
    | {type:'increaseBy', payload:{value:number}}
    | {type:'reset'};

  const counterReducer=(state:CounterState, action:CounterAction):CounterState=>{
    switch (action.type) {
      case 'reset':
        return {
          counter:0,
          previous:0,
          changes:0
        } 
      case 'increaseBy':
          return {
            counter:state.counter+ action.payload.value,
            previous:state.counter,
            changes:state.changes+1
          } 
      default:
        return state;
    }
  }

  const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE)
  
  const handleReset= () => {
      dispatch({type:'reset'})
  }

  const increaseBy= (value:number) => {
      dispatch({type:'increaseBy',payload:{value}});
  }

  return (
    <>
    <h1>Counter Reducer: </h1>

    <pre>
      {JSON.stringify(counterState,null,2)}
    </pre>
    
    <button onClick={handleReset}>
    reset
    </button>
    <button onClick={()=>increaseBy(1)}>
    +1
    </button>
    <button onClick={()=>increaseBy(5)}>
    +5
    </button>
    <button onClick={()=>increaseBy(10)}>
    +10
    </button>
    </>
  )
}
