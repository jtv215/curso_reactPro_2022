import React, { useReducer, useState } from 'react'
import { act } from 'react-dom/test-utils';
import { json } from 'stream/consumers';
import { CounterState } from './interfaces/interfaces';
import {counterReducer} from './state/counterReducer';
//import { doReset, doResetdoIncreaseBy } from './actions/action';
import * as actions from './actions/action';

const INITIAL_STATE:CounterState = {
  counter:20,
  previous:10,
  changes:2
}  

export const CounterReducerCompenent = () => {

  const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE)
  
  const handleReset= () => {
      dispatch(actions.doReset())
  }

  const increaseBy= (value:number) => {
      dispatch(actions.doResetdoIncreaseBy(value));
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
