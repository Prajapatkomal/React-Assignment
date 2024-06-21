import useToggleItem from "../useToggleItem"


const ToggleItem = () => {

const  [item,toggleState] = useToggleItem(["A", "B", "C","D"])



  return (
    <div>
         <h1>ToggleItem</h1>
         <h3>Click on button to toggle</h3>
         <button style={{fontSize:'30px', border:'2px solid'}} onClick={toggleState}>{item}</button>
    </div>

  )
}

export default ToggleItem