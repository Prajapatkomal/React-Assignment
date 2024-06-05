import  { useState,useEffect } from 'react'


const Products = () => {

  const [userdata,setuserdata] = useState([])



async function fetchdata(){
  try {
         const res = await fetch('https://reqres.in/api/login')
         const data = await res.json()
         console.log(data.data)
         setuserdata(data.data)
  } catch (error) {
      console.log(error) 
  }
}

useEffect(()=>{
fetchdata() 

},[])






  return (<>
   
    <div style={{display:'grid', gridTemplateColumns: 'repeat(3,1fr)', marginTop: '50px'}} > 
        {userdata.map((el)=>{
            return  <ul key={el.id} >
              <p>Name :{el.name}</p> 
               <p>Year: {el.year}</p>
               <p>Pantone_value: {el.pantone_value}</p>
            </ul>
        })}
         

     </div>
     </>
  )
}

export default Products