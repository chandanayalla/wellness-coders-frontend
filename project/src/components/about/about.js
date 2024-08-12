import React from 'react';
import { Box, Flex, Heading, Text, Image, useBreakpointValue, VStack } from '@chakra-ui/react';

const About = () => {
  return (
    <Flex direction="column" minH="100vh" bgGradient="linear(to-r, teal.300, teal.500)">
      {/* Header */}
      <Box
        as="header"
        width="full"
        bg="teal.700"
        color="white"
        py={4}
        px={6}
        position="fixed"
        top={0}
        left={0}
        zIndex={1}
        boxShadow="md"
      >
        <Flex align="center" justify="space-between" maxW="1200px" mx="auto">
          <Heading as="h1" size="lg">
            About 
          </Heading>
          <Flex
            as="nav"
            listStyleType="none"
            spacing={4}
            align="center"
            display={useBreakpointValue({ base: 'none', md: 'flex' })}
            gap={6}
          >
            <Box as="li" mx={2}>
              <Text fontWeight="bold" _hover={{ textDecoration: 'underline', cursor: 'pointer' }}>
                HOME
              </Text>
            </Box>
            <Box as="li" mx={2}>
              <Text fontWeight="bold" _hover={{ textDecoration: 'underline', cursor: 'pointer' }}>
                ABOUT 
              </Text>
            </Box>
            <Box as="li" mx={2}>
              <Text fontWeight="bold" _hover={{ textDecoration: 'underline', cursor: 'pointer' }}>
                CONTACT
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>

      {/* Main Content */}
      <Box
        pt="80px" // Adjust padding to accommodate the fixed header
        flex="1"
        px={4}
        bg="white"
        color="gray.800"
        minH="calc(100vh - 80px)" // Ensure it fits within the viewport
      >
        <VStack spacing={8} align="center" maxW="1200px" mx="auto" py={8}>
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to Our Nutrition & Meal Planning Hub
          </Heading>

          <Text fontSize="lg" textAlign="center">
            At Wellness Coders, we are dedicated to providing top-notch sports nutrition and meal planning services.
            Our goal is to empower you with the knowledge and tools to optimize your health and performance through
            customized nutrition strategies and meal planning solutions.
          </Text>

          <Flex direction={{ base: 'column', md: 'row' }} spacing={6} mb={8} justify="center">
            <Box flex="1" mb={{ base: 4, md: 0 }}>
              <Image
                src="https://source.unsplash.com/800x600/?sports-nutrition"
                alt="Sports Nutrition"
                borderRadius="md"
                boxShadow="md"
                width="100%"
                height="auto"
              />
            </Box>
            <Box flex="1">
              <Image
                src="https://source.unsplash.com/800x600/?meal-planning"
                alt="Meal Planning"
                borderRadius="md"
                boxShadow="md"
                width="100%"
                height="auto"
              />
            </Box>
          </Flex>

          <VStack spacing={4} align="start" maxW="800px" mx="auto">
            <Heading as="h2" size="lg">
              Why Choose Us?
            </Heading>
            <Text fontSize="lg">
              Our team of experts combines the latest research in sports nutrition with practical meal planning
              strategies. We offer:
            </Text>
            <Text fontSize="lg" as="ul" pl={5}>
              <li>Personalized nutrition plans tailored to your needs.</li>
              <li>Expert advice on sports nutrition to enhance performance.</li>
              <li>Comprehensive meal planning to ensure balanced, nutritious diets.</li>
              <li>Resources and tools to help you stay on track with your goals.</li>
            </Text>
          </VStack>
        </VStack>
      </Box>

      {/* Footer */}
      <Box
        as="footer"
        bg="teal.700"
        color="white"
        py={6}
        px={4}
        textAlign="center"
        width="full"
        borderTop="1px solid rgba(255, 255, 255, 0.3)"
      >
        <VStack spacing={4} align="center">
          <Heading as="h3" size="md" mb={2} textTransform="uppercase">
            Explore More
          </Heading>
          <Text mb={4} fontSize="md">
            Learn more about our services and how we can help you achieve your health and fitness goals.
          </Text>
          <Flex as="ul" listStyleType="none" spacing={4} mb={4} justify="center">
            <Box as="li" mx={2}>
              <Text fontWeight="bold" _hover={{ textDecoration: 'underline', cursor: 'pointer' }}>
                Nutrition
              </Text>
            </Box>
            <Box as="li" mx={2}>
              <Text fontWeight="bold" _hover={{ textDecoration: 'underline', cursor: 'pointer' }}>
                Meal Planning
              </Text>
            </Box>
            <Box as="li" mx={2}>
              <Text fontWeight="bold" _hover={{ textDecoration: 'underline', cursor: 'pointer' }}>
                Recipes
              </Text>
            </Box>
          </Flex>
          <Text fontSize="sm" opacity={0.8}>
            © 2024 Wellness Coders. All rights reserved.
          </Text>
        </VStack>
      </Box>
    </Flex>
  );
};

export default About;
