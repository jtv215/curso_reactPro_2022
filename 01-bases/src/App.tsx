import React from 'react';
import { Counter } from './bases/Counter';
import { CounterBy } from './bases/CounterBy ';
import { CounterEfect } from './bases/CounterEfect';
import { CounterHook } from './bases/CounterHook';
import { CounterReducerCompenent } from './counter-reducer/CounterReducer';

function App() {
  return (
    <>
    <h1>react</h1>
    <hr />

    <Counter initialValue={15}></Counter>
    <CounterBy initialValue={15}></CounterBy>
    <CounterEfect></CounterEfect>
    <CounterHook></CounterHook>
    <CounterReducerCompenent></CounterReducerCompenent>
  </>
  );
}

export default App;
