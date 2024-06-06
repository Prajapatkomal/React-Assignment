import "./App.css";
import { Image,Box, Heading,Text, Tag, HStack, ButtonGroup, Button, Center, GridItem, Grid } from "@chakra-ui/react";

function App() {
  return (
    <>
    
    <Box boxShadow='2xl' p='4' rounded='md' bg='white' w='50%'  m='25%' textAlign='center'>
      <Center>
      <Image
        borderRadius="full"
        boxSize="150px"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR614yICWA8Jv0GQSE-mcZEMSwY3HQJzItWQ&s"
        alt="Dan Abramov"
        mt='10'
        />
      </Center>
        
     
        <Heading fintSize='90'  mt='8'>
          Lindsey James
        </Heading>
        <Heading size='lg' color='RGBA(0, 0, 0, 0.48)' >
          @lindsey_jam3s
        </Heading>
         <Text fontSize='4xl'>
          Actress,musician,songwriter <br/>
         and Artist. PM for work inquires<br/>
         or
         </Text>
         <Text color='blue.400' fontSize='4xl'  >#tag</Text>
         <Text fontSize='4xl' >me in your post</Text>
       
         <Grid templateColumns={{base:'repeat(1,1fr)',sm:'repeat(1,1fr)', md:'repeat(1,1fr)', lg:'repeat(3,1fr)'}} mt='10'  >
         <GridItem> <Tag fontSize= '25px' p='2'>#ART</Tag> </GridItem>
         <GridItem> <Tag fontSize= '25px'  p='2'>#PHOTOGRAPHY</Tag> </GridItem>
         <GridItem><Tag fontSize= '25px'  p='2'>#MUSIC</Tag> </GridItem>
        </Grid>
        <Grid gap='50' templateColumns= {{base: 'repeat(1,1fr)',sm:'repeat(1,1fr)', md:'repeat(1,1fr)', lg:'repeat(2,1fr)'}} mt='10'  >
        <Button colorScheme='gray' borderRadius='60' fontSize='30' p='9'>Message</Button>
        <Button colorScheme='blue'  borderRadius='60'fontSize='30' p='9'>Follow</Button>
        </Grid>
        
   </Box>
    </>
  );
}

export default App;
