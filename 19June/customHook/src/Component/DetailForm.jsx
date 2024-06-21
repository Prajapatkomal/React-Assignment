import useFormState from "../useFormState"



const DetailForm = () => {
  
const[formstate,handleChange,setFormState] = useFormState({ name:'', email:'',age:''})

function handleSubmit(e){
  e.preventDefault()
  console.log(formstate)
  setFormState({ name:'', email:'',age:''})

}

  return (<>
    <h1>Detail Form</h1>
    <form onSubmit={handleSubmit}>
        Name: <input type='text' value={formstate.name} onChange={handleChange} name='name'/><br/>
        Email: <input type='text' value={formstate.email} onChange={handleChange} name='email'/><br/>
        Age: <input type='number' value={formstate.age} onChange={handleChange} name='age'/><br/>
         <input type='submit'/><br/>
        <div>
           Name : {formstate.name} <br/>
           Email : {formstate.email} <br/>
           Age : {formstate.age}
        </div>
   </form>
      
   </>
  )
}

export default DetailForm