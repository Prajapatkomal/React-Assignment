import { Center } from "@chakra-ui/react";
import Cardexample from "./Card";
import Inputfeild from "./Inputfeild";

import "./App.css";

function App() {
  return (
    <>
      <Center bg="red.500" h="100%" color="white" p="3" fontSize="30" mb="10">
        Product Shopping
      </Center>
      <Inputfeild/>
      <Cardexample />
     
    </>
  );
}

export default App;
