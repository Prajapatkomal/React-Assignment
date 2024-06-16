
import { useEffect } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import {  fetchdata,  sortDataAsc, sortDataDesc } from './redux/actionType'
import { Box, Center, Flex, Grid, GridItem, Heading, Image, Select, Text } from '@chakra-ui/react'

function App() {
 const coffeedata = useSelector(state=>state.data)
 const dispatch = useDispatch()
console.log(coffeedata)


  useEffect(()=>{
    dispatch(fetchdata())
  },[])


  function handleSort(e){
    const value = e.target.value

    if(value==='asc'){
      dispatch({type:sortDataAsc ,payload:e.target.value})
    }
    if(value==='desc'){
      dispatch({type:sortDataDesc ,payload:e.target.value})
    }
  }



  return (
    <Box p='10'>
      <Flex gap='40' >
              <Heading ml='70'> Coffee list app</Heading>
           <Select  placeholder='Sort Data by Price' w='300px' onChange={handleSort}>
                 <option value='asc' >Asc</option>
                 <option value='desc'>Desc</option>
          </Select>
    </Flex>

   
        {coffeedata.isloading? 'loading...' : null}
     <Grid templateColumns= {{base: 'repeat(1, 1fr)' , sm:'repeat(1, 1fr)', md:'repeat(2, 1fr)',lg:'repeat(3, 1fr)' }} gap='10' p='10'>
        {!coffeedata.isloading  && !coffeedata.isError && coffeedata.data.map((el)=>{
          return <GridItem  key={el.id} border={'1px solid'} textAlign={'center'}>
            <Text fontSize='22' >Id : {el.id}</Text> <br/>
            <Text fontSize='22'>Title:{el.title} </Text>
           <Center><Image src={el.image} h='300px' w='300px' /> </Center> <br/>
           Description : {el.description}<br/>
          <Text fontSize='25'>Price: {el.price}</Text>
            </GridItem>
    })}
    </Grid>
     
  
    
    
    </Box>
  )
}

export default App
