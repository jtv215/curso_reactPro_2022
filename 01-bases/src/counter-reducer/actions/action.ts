
export type CounterAction = 
    | {type:'increaseBy', payload:{value:number}}
    | {type:'reset'};

export const doReset = ():CounterAction =>({
   type:'reset' 
})

export const doResetdoIncreaseBy = (value:number):CounterAction =>({
  type:'increaseBy',
  payload:{
    value:value
  },
});