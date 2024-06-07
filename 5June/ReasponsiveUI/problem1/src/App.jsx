import "./App.css";
import {
  Center,
  Text,
  Heading,
  Stack,
  Box,
  Flex,
  Image

} from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box bg="#E2E8F0" p='8%'>
        <Stack spacing={2}>
          <Heading textAlign="center">Our Clients Speak</Heading>
          <Text textAlign="center">
            We have been working with clients around the world
          </Text>
        </Stack>



        <Flex gap='10' m="10"  flexDirection={{base:'column',sm:'column', md:'row', lg:'row'}}  justifyContent='space-evenly'>
          <Box border="1px solid gray" bg="white" p="6" borderRadius="8">
            <Text textAlign="center" fontWeight="bold">
              Efficient Collaborating
            </Text>
            <Text textAlign="center" noOfLines={[1, 2, 3]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in
              laudantium vel perferendis asperiores deleniti molestias.
            </Text>
          </Box>
                   
          <Box border="1px solid gray" bg="white" p="6" borderRadius="8">
            <Text textAlign="center" fontWeight="bold">
              Intuitive Design
            </Text>
            <Text textAlign="center" noOfLines={[1, 2, 3]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in
              laudantium vel perferendis asperiores deleniti molestias.
            </Text>
          </Box>
                   
          <Box border="1px solid gray" bg="white" p="6" borderRadius="8">
            <Text textAlign="center" fontWeight="bold">
              Mindblowing Service
            </Text>
            <Text textAlign="center" noOfLines={[1, 2, 3]}>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in
              laudantium vel perferendis asperiores deleniti molestias.
            </Text>
          </Box>
        </Flex>




        <Flex  gap='10%' justifyContent='space-evenly' flexDirection={{base:'column',sm:'column', md:'row', lg:'row'}}>
          <Box>
            <Center>
              <Image
                borderRadius="full"
                boxSize="50px"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxHMPj0zrWOAyWGV7RoCloqON6BQDpecoi4A&s"
                alt="jane cooper"
              />
            </Center>
            <Text fontWeight="bold" textAlign="center">
              Jane cooper
            </Text>
            <Text textAlign="center">CEO at ABC Corporation</Text>
          </Box>
                       
          <Box>
            <Center>
              <Image
                borderRadius="full"
                boxSize="50px"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxHMPj0zrWOAyWGV7RoCloqON6BQDpecoi4A&s"
               alt="jane cooper"
              />
            </Center>
            <Text fontWeight="bold" textAlign="center">
              Jane cooper
            </Text>
            <Text textAlign="center">CEO at ABC Corporation</Text>
          </Box>
                        
          <Box>
            <Center>
              <Image
                borderRadius="full"
                boxSize="50px"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxHMPj0zrWOAyWGV7RoCloqON6BQDpecoi4A&s"
               alt="jane cooper"
              />
            </Center>
            <Text fontWeight="bold" textAlign="center">
              Jane cooper
            </Text>
            <Text textAlign="center">CEO at ABC Corporation</Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default App;
