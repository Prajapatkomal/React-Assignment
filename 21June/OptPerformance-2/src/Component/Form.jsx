import React, {  useCallback, useEffect, useState } from 'react'
import useForm from '../useForm'


const Form = ()=>{
  const[fromValid,setFormValid] = useState(false)
  const[error,setError] = useState({})

 const  [formVal,setFormVal,validation] =  useForm()



const handleSubmit= useCallback((e)=>{
 e.preventDefault()
 console.log(formVal)
 setFormVal({name:'', email:'',password:'', confirmPassword:''})

},[formVal,setFormVal])



const handleChange = useCallback((e)=>{
  const {name,value} = e.target
   setFormVal({...formVal, [name]: value})
   setError(validation({...formVal, [name]:value}))
 
},[setFormVal,formVal,validation])


useEffect(() => {
  setFormValid(Object.keys(error).length === 0);
}, [error]);



  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>Form</h1>
        <label>Name:</label>
        <input type="text" name="name" value={formVal.name}  onChange={handleChange} />
        {error.name && <p style={{ color: 'red' }}>{error.name}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email"  value={formVal.email} onChange={handleChange} />
        {error.email && <p style={{ color: 'red' }}>{error.email}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password"  value={formVal.password} onChange={handleChange} />
        {error.password && <p style={{ color: 'red' }}>{error.password}</p>}
      </div>
      <div>
        <label>Confirm Password:</label>
        <input type="password" name="confirmPassword" value={formVal.confirmPassword} onChange={handleChange} />
        {error.confirmPassword && <p style={{ color: 'red' }}>{error.confirmPassword}</p>}
      </div>
     { <input type="submit" disabled={!fromValid} />}
    </form>
  );
};

export default Form;