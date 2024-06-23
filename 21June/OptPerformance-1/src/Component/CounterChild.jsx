import React from "react";

const CounterChild = React.memo(({ increment, decrement, value }) =>{
  return (
    <div>
     
      <h1> Counter</h1> 
      <h1>{value}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
})

export default CounterChild;
