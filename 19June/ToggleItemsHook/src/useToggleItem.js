import { useState } from "react"


const useToggleItem = (arr) => {
let data = arr
const [state,setState] = useState(1)
const[item,setItem] = useState(arr[0])


function toggleState(){
  setState((prev)=>{
      setItem(data[prev])
      return prev === data.length-1 ? 0 : prev +1
  })

}


    return [item, toggleState]
}

export default useToggleItem