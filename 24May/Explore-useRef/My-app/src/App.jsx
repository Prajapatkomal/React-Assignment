import { useState, useRef, useEffect } from "react";

import "./App.css";

function App() {

  // focus on mounting inputbox - Focus  code will gor here
  function FocusInput() {
    const data = useRef();

    useEffect(() => {
      data.current.focus();
    }, []);

    return <input type="text" placeholder="Focused on Mounting" ref={data} />;
  }


//  type something here inputbox - Input value rendering on  Dom code will go here

  function Inputdata() {
    const input = useRef();
    const [inputVal, setInputVal] = useState("");


    function handleChange() {
      setInputVal(input.current.value);
    }

    return (
      <div>
        <input
          type="text"
          placeholder="type something here"
          ref={input}
          onChange={handleChange}
        />
        <h1>Current Value : {inputVal} </h1>
      </div>
    );
  }


  //   Div Color Changing code will go here

  function ChangeColorDiv() {
    const divRef = useRef();

    function changeColor() {
      divRef.current.style.backgroundColor =
        divRef.current.style.backgroundColor === "red" ? "blue" : "red";
    }

    return (
      <div>
             <h3>Click Here to Change Background Color</h3>
             <div
                  ref={divRef}
                  onClick={changeColor}
                  style={{ height: "300px", width: "600px", backgroundColor: "red" }}>
             </div>
      </div>
    );
  }

  // App component will return here

  return (
    <div>
      <FocusInput />
      <Inputdata />
      <ChangeColorDiv />
    </div>
  );
}

export default App;
