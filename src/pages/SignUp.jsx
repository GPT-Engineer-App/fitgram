import React from "react";
import { VStack, Input, Button, Text } from "@chakra-ui/react";

function SignUp() {
  return (
    <VStack spacing={4} p={8}>
      <Text fontSize="2xl" fontWeight="bold">
        Sign Up
      </Text>
      <Input placeholder="Email" size="md" />
      <Input placeholder="Password" type="password" size="md" />
      <Input placeholder="Confirm Password" type="password" size="md" />
      <Button colorScheme="teal" size="lg" w="full">
        Sign Up
      </Button>
    </VStack>
  );
}

export default SignUp;
