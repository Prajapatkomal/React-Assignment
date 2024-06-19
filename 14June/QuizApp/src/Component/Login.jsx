import { Box, Button, Center, Flex, Heading, Input, Spacer } from '@chakra-ui/react'
import { useState } from 'react'
import { loginToken } from '../redux/actionType'
import { useDispatch, useSelector } from 'react-redux'
import Quiz from './Quiz'



const Login = () => {
const [input,setInput] = useState({email:'', password:''})
const dispatch= useDispatch() 
const Token = useSelector(state=>state.login)


async function handleClick(){
    dispatch (loginToken(input))
  }

  return (
    <Center >
          
         {Token? <Quiz/> :(
        <Box>
             <Heading mb='10'>Login Here...</Heading>
             <Flex gap='10'>
            <Input bg='white' w='50' type='email' onChange={(e)=>setInput({...input,email: e.target.value})} placeholder='Type email here'/>
         
            <Input bg='white'  w='50' type='text' onChange={(e)=>setInput({...input,password: e.target.value})} placeholder='Type password here'/>
             <Button  bg='teal' color='white' onClick={handleClick}>Login</Button>
             </Flex>
        </Box>
           ) }
           
          
    </Center>
  )
}

export default Login