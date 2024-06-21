import useTimer from "../useTimer";


const Timer = () => {
  const  [startTimer,stopTimer,resetTimer,timer] = useTimer()

  return (
    <div>
       <h1>Timer</h1>
      <h1>{timer}</h1>
      <button style={{backgroundColor: 'blue',marginRight:'10px'}} onClick={startTimer}>Start</button>
      <button style={{backgroundColor: 'red', marginRight:'10px'}} onClick={stopTimer}>Stop</button>
      <button style={{backgroundColor: 'green'}} onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Timer;


