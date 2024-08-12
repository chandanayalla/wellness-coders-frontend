import React from 'react';
import { Box, Flex, Heading, Text, Button, } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const About= () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <Flex direction="column" minH="100vh" bgGradient="linear(to-r, teal.400, teal.500)">
    
      <Box
        as="nav"
        width="full"
        bg="white"
        color="black"
        py={4}
        px={6}
        position="fixed"
        top={0}
        left={0}
        zIndex={1}
        boxShadow="lg"
      >
        <Flex align="center" justify="space-between" maxW="1200px" mx="auto">
          <Button variant="outline" colorScheme="teal" onClick={handleBackClick}>
             Home
          </Button>
        </Flex>
      </Box>

      <Box
        pt="80px"
        flex="1"
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        color="white"
        px={4}
        bgGradient="linear(to-b, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7))"
        minH="calc(100vh - 80px)"
      >
        <Flex
          direction="column"
          align="center"
          justify="center"
          maxW="800px"
          mx="auto"
        >
          <Heading as="h1" size="2xl" mb={4} textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)">
            About
          </Heading>
          <Text fontSize="lg" mb={6} textShadow="1px 1px 3px rgba(0, 0, 0, 0.5)">
            Welcome to our website! We are a passionate team dedicated to providing you with the best resources and tools for your wellness journey.
          </Text>
          <Text fontSize="md" mb={6}>
            Our website offers a wide range of content designed to help you make informed decisions about your health and nutrition. From expert advice on meal planning to delicious and nutritious recipes, we aim to support you every step of the way.
          </Text>
          <Text fontSize="md" mb={6}>
            We believe in a holistic approach to wellness, integrating both physical and mental health practices. Our team of experts is here to provide you with accurate and reliable information to help you lead a healthier and more balanced life.
          </Text>
          <Button
            size="lg"
            colorScheme="teal"
            variant="solid"
            _hover={{ bg: 'teal.800' }}
            borderRadius="full"
            onClick={handleBackClick}
          >
           Home
          </Button>
        </Flex>
      </Box>
      <Box
        as="footer"
        bg="white"
        color="black"
        py={6}
        px={4}
        textAlign="center"
        width="full"
        borderTop="1px solid rgba(255, 255, 255, 0.3)"
      >
        <Text fontSize="sm" opacity={0.8}>
          © 2024 Wellness Coders. All rights reserved.
        </Text>
      </Box>
    </Flex>
  );
};

export default About;
