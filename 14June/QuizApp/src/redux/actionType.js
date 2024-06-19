
const url = 'https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz'







export const fetchdata = ()=>async(dispatch)=>{

    dispatch({type:'LOADING'})
 try {
    const res = await fetch(url)
    const data = await res.json()
    dispatch({type:'SUCCESS' , payload : data.data })
 } catch (error) {
      
    dispatch({type:'ERROR'})
 }

    
}



export const loginToken=(input)=>async(dispatch)=>{
  console.log(input)
   try {
      const res = await fetch('https://reqres.in/api/login',{
          method: 'POST',
          headers: {'content-type' : 'application/json'},
          body: JSON.stringify(input)
      })
      const data = await res.json()
      console.log(data.token)
      dispatch({type:'LOGIN' , payload : data.token })
    
    } catch (error) {
      console.log(error)
    }
  
}






