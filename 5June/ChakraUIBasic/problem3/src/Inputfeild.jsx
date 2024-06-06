import { Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react";
import React from "react";

const Inputfeild = () => {
  return (
    <InputGroup mb='10'>
      <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em" >
        $
      </InputLeftElement>
      <Input placeholder="Enter amount" />
      <InputRightElement>
      
      </InputRightElement>
    </InputGroup>
  );
};

export default Inputfeild;
