import React, { useState } from 'react'

interface Props{
    initialValue?:number
}

export const Counter = ({initialValue=0}:Props) => {

  const [counter, setCounter] = useState(initialValue);

  const handleClick = () => {
      setCounter(counter+1)
  }
  return (
    <>
    <h1>counter: {counter}</h1>
    <button onClick={handleClick}>
    +1
    </button>
    </>
  )
}
