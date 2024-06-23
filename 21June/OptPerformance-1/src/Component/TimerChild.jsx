import React from 'react'

export const TimerChild = ({startTimer,stopTimer,resetTimer,timer}) => {


  return (
    <div>
        <h1>Timer - {timer}</h1>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
    </div>
  )
}
