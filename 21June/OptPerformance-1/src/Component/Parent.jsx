import React, { useCallback } from 'react'
import { useState } from 'react'
import CounterChild from './CounterChild'
import { TimerChild } from './TimerChild'
import { useRef } from 'react'

export const Parent = () => {

const [count,setCount] = useState(0)
const[timer,setTimer]= useState(0)
const[isRunning,setIsRunning]= useState(false)
const interValRef =  useRef(null)

const increment= useCallback(()=>{
    setCount(prev=>prev+1)
    console.log('increment....'+ count)
},[])

const decrement=useCallback(()=>{
    setCount(prev=>prev-1)
    console.log('decrement....'+ count)
},[])

const startTimer = ()=>{
    if(!isRunning){
        setIsRunning(true)
        interValRef.current =  setInterval(()=>{
            setTimer(prev=>prev+1)
        },1000)
    }
    console.log('startTimer')
}

const stopTimer = ()=>{
    if(isRunning){
        clearInterval( interValRef.current)
        setIsRunning(false)
    }
    console.log('stopTimer')
}

const resetTimer = ()=>{
    clearInterval(interValRef)   
    setTimer(0)
    setIsRunning(false)
    console.log('resetTimer')
}

  return (
    <div>
        <CounterChild increment={increment} decrement={decrement} value={count}/>
        <TimerChild timer={timer} startTimer={startTimer} stopTimer={stopTimer} resetTimer={resetTimer}/>
       
    </div>
  )
}
