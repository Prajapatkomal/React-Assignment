import { Box, Heading } from "@chakra-ui/react"



const Result = (props) => {


  return (
    <Box >
        <Heading color='red.700'> Total Score : {props.totalScore}</Heading> <br/>
     <Heading color='green.800'> Your Score : {props.score}</Heading>
    </Box>
  )
}

export default Result