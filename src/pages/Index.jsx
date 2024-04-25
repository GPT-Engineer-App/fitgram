// Instagram clone focused on fitness content
import { Box, Flex, Image, Input, Button, Text, VStack, HStack, IconButton, useColorMode, useColorModeValue, Spacer } from "@chakra-ui/react";
import { FaHeart, FaComment, FaPlus, FaSun, FaMoon } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const navColor = useColorModeValue("white", "gray.900");

  return (
    <VStack minH="100vh" bg={bgColor}>
      <Flex w="full" bg={navColor} p={4} justifyContent="space-between" alignItems="center">
        <Text fontSize="2xl" fontWeight="bold">
          FitInsta
        </Text>
        <HStack spacing={4}>
          <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} aria-label="Toggle theme" />
          <Button leftIcon={<FaPlus />} colorScheme="pink">
            New Post
          </Button>
        </HStack>
      </Flex>
      <VStack spacing={8} w="full" maxW="md" px={4} py={8}>
        <Post username="fit_jane" imageSrc="https://images.unsplash.com/photo-1516726817505-f5ed825624d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwbW9kZWx8ZW58MHx8fHwxNzE0MDc1MzAyfDA&ixlib=rb-4.0.3&q=80&w=1080" caption="Never miss a Monday! 💪 #motivation #fitness" likes={231} comments={14} />
        <Post username="gym_bro" imageSrc="https://images.unsplash.com/photo-1599058917212-d750089bc07e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYW4lMjBsaWZ0aW5nJTIwd2VpZ2h0c3xlbnwwfHx8fDE3MTQwNzUzMDJ8MA&ixlib=rb-4.0.3&q=80&w=1080" caption="Pushing my limits! #strength #workout" likes={189} comments={12} />
        <Post username="yoga_alex" imageSrc="https://images.unsplash.com/photo-1495001258031-d1b407bc1776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBkb2luZyUyMHlvZ2F8ZW58MHx8fHwxNzE0MDc1MzAzfDA&ixlib=rb-4.0.3&q=80&w=1080" caption="Morning routines with a view. #yoga #peace" likes={305} comments={18} />
      </VStack>
    </VStack>
  );
};

const Post = ({ username, imageSrc, caption, likes, comments }) => {
  return (
    <Box bg="white" shadow="md" rounded="lg" overflow="hidden">
      <Image src={imageSrc} alt="Post image" />
      <Box p={4}>
        <Text fontWeight="bold">{username}</Text>
        <Text>{caption}</Text>
        <HStack spacing={4} mt={2}>
          <Button leftIcon={<FaHeart />} size="sm" colorScheme="pink">
            {likes}
          </Button>
          <Button leftIcon={<FaComment />} size="sm" colorScheme="teal">
            {comments}
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default Index;
