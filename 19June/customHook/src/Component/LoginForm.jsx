import useFormState from "../useFormState"



const LoginForm = () => {
  
const[formstate,handleChange,setFormState] = useFormState({email:'', password:''})

function handleSubmit(e){
  e.preventDefault()
  console.log(formstate)
  setFormState({email:'', password:''})

}

  return (<>
   <h1>Login Form</h1>
    <form onSubmit={handleSubmit}>
       
        Email: <input type='text' value={formstate.email} onChange={handleChange} name='email'/><br/>
        Password: <input type='text' value={formstate.age} onChange={handleChange} name='age'/><br/>
         <input type='submit'/><br/>
        <div>
           Email : {formstate.email} <br/>
           Password : {formstate.password}
        </div>
   </form>
      
   </>
  )
}

export default LoginForm