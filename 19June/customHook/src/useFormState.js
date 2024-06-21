import  { useState } from 'react'




const useFormState = (initialVal) => {
  const [formstate,setFormState] = useState(initialVal)
  
  function handleChange(e){ 
    const{name,value} = e.target
    setFormState({...formstate,[name]:value})
  
  }

 
  return [formstate,handleChange,setFormState]
 
}

export default useFormState