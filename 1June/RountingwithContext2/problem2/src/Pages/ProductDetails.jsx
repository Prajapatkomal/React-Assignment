
import { useState ,useEffect} from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

const [data,setdata] = useState({})
const {id} = useParams()

useEffect(()=>{
 fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`)
 .then(e=>e.json())
 .then(e=>setdata(e.data))
},[id])



  return (
    <div>
      <h1>ProductDetails</h1>
            <p>Brand : {data.brand}</p>
            <p> Title :{data.title} </p>
            <p>Category : {data.category}</p>
            <p>Price : {data.price}</p>
    </div>
  )
}

export default ProductDetails