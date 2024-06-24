import {  useState } from "react";



const useForm = () => {
  const [formVal,setFormVal] = useState({name:'', email:'',password:'', confirmPassword:''})
 

  const  validation = (formVal)=>{
    const error = {}
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  
  
    if(formVal.name.length <3){
      error.name = 'Name should contain atleast 3 character'
    }
    if(!emailRegex.test(formVal.email)){
        error.email = 'Invalid email'
    }
    if(formVal.password.length < 6){
      error.password = 'Password should contain atleast 6 character'
    }
    if( formVal.password !== formVal.confirmPassword ){
      error.confirmPassword = 'Password does not match'
    }
    
    return error
  }
  

  return [formVal,setFormVal,validation]
}

export default useForm
