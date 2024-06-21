import {useRef, useState } from 'react';

const useTimer = () => {

  const [timer, setTimer] = useState(0);
  const[Running,setIsRunning] =useState(false)
 const intervalRef = useRef()



  function startTimer() {
    if(!Running){
        setIsRunning(true)
        intervalRef.current= setInterval(() => {
            setTimer((prevTimer) => prevTimer + 1); 
          }, 1000);
    }
    }
  

  function stopTimer(){
    if(Running)
      clearInterval(intervalRef.current)
    setIsRunning(false)
  }

  function resetTimer(){
    clearInterval(intervalRef.current)
    setIsRunning(false)
    setTimer(0)
}

 return [startTimer,stopTimer,resetTimer,timer]
}

export default useTimer