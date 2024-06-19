import { Box, Button, Center, Flex, Heading,  Spinner, Toast } from '@chakra-ui/react'
import  { useEffect, useState } from 'react'
import { fetchdata } from '../redux/actionType'
import { useDispatch, useSelector } from 'react-redux'
import Result from './Result'



const Quiz = () => {
const Quiz = useSelector(state=>state.quiz)
const dispatch = useDispatch()

const[currQuestionIndex,setCurrQuestionIndex] = useState(0) 
const [score,setScore] = useState(0)
const[showResult,setShowResult] = useState(false)

  useEffect(()=>{
    dispatch(fetchdata())
  },[])


 function  handlePreQuestion(){
  setCurrQuestionIndex((prev)=>prev-1) 
 }

 function  handleNextQuestion(){
    setCurrQuestionIndex((prev)=>prev+1)
  }

 

 if (Quiz.isLoading) {
  return (
    <Box border='1px solid' m='20' p='10'>
      <Center>
        <Spinner />
      </Center>
    </Box>
  );
}

if (Quiz.isError) {
  return (
    <Box border='1px solid' m='20' p='10'>
      <Center>
        <Heading>Error loading quiz data</Heading>
      </Center>
    </Box>
  );
}

if (!Quiz.data || Quiz.data.length === 0) {
  return (
    <Box border='1px solid' m='20' p='10'>
      <Center>
        <Heading>No quiz data available</Heading>
      </Center>
    </Box>
  );
}

console.log(showResult)

function findScore(id){
    if(id===Quiz.data[currQuestionIndex].correctOptionIndex){
      setScore((prev)=>prev+1) 
    }
}

console.log(score)






  return (
<Box >
    {showResult? (<Result  score={score}  totalScore={Quiz.data.length}/>) : (
     <Box>
 <Center mb='5' color='blue.700' ><Heading>Quiz Based on React</Heading></Center>

 <Heading  size='lg'  m='7'>{currQuestionIndex+1}. {Quiz.data[currQuestionIndex].question}</Heading>
 <Flex direction={'column'}  gap='5'>
 {Quiz.data[currQuestionIndex].options && Quiz.data[currQuestionIndex].options.map((el,ind)=>{
     return  <Button  bg ='teal'  w='900px' color='white'  fontSize={'20'}  key={el.id}  size='md' onClick={()=>findScore(ind)}> {ind+1}. {el}</Button> 
 })}
 </Flex>
  <Flex justifyContent={'flex-end'} gap='5' mt='10'>
  <Button colorScheme='red' fontSize={'20'} onClick={handlePreQuestion} isDisabled={currQuestionIndex===0}>Previous</Button>
  <Button colorScheme='yellow' fontSize={'20'} onClick={handleNextQuestion}  isDisabled={currQuestionIndex===Quiz.data.length-1}>Next</Button>
  {currQuestionIndex===Quiz.data.length-1 && <Button colorScheme='green' onClick={()=>setShowResult(true)}>Submit</Button>}
  </Flex>    
   </Box>
    )}

</Box>
    
  )
}

export default Quiz




