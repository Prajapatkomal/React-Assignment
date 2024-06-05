import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
const [data,setdata] = useState([])


async function fetchdata(){
const res= await fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products')
const data = await res.json()
setdata(data.data)
}
useEffect(()=>{
    fetchdata()
},[])




  return (
    <div>
       
       <h1>Products</h1>
       <div style={{display: 'grid' , gridTemplateColumns: 'repeat(3,1fr)', gap: '20px', margin:'100px'}}>
         {data.map((el)=>{
            return <ul key={el.id} style={{border: '1px solid' , borderRadius: '5px', textAlign:'center'}}>
                <p>Brand : {el.brand}</p>
              <p> Title :<Link to={`/Products/${el.id}`}> {el.title} </Link> </p>
            <p>Category : {el.category}</p>
            <p>Price : {el.price}</p>
            
            
            </ul>
           })}  
         
         </div>

    </div>
  )
}

export default Products